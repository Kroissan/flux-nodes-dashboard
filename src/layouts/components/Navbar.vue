<template>
  <div class="navbar-container d-flex content align-items-center">
    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-md-flex">
      <b-dropdown
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        :text="fluxAddress"
        variant="outline-primary"
        size="sm"
      >
        <b-dropdown-item-button v-if="fluxAddress">
          {{ fluxAddress }}
        </b-dropdown-item-button>
        <b-dropdown-divider />
        <b-form-input
          id="dropdown-form-custom"
          v-model="fluxAddress"
          type="text"
          size="sm"
          placeholder="Enter Flux address"
          @input="changeFluxAddress(fluxAddress)"
        />
      </b-dropdown>
    </div>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <dark-Toggler class="d-block" />
      <menu-Collapse-Toggler class="d-block" />
      <b-button
        v-if="privilege !== 'none'"
        variant="outline-primary"
        size="sm"
        @click="logout"
      >
        Logout
      </b-button>
    </b-navbar-nav>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {
  BLink, BDropdown, BDropdownItemButton, BDropdownDivider, BNavbarNav, BButton, BFormInput, // BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar,
} from 'bootstrap-vue';
import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue';
import MenuCollapseToggler from '@core/layouts/components/app-navbar/components/MenuCollapseToggler.vue';
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue';
import Ripple from 'vue-ripple-directive';

import IDService from '@/services/IDService';

const qs = require('qs');

const store = require('store');

export default {
  components: {
    BLink,
    BNavbarNav,
    BDropdown,
    BDropdownItemButton,
    BDropdownDivider,
    BButton,
    BFormInput,
    // Navbar Components
    DarkToggler,
    MenuCollapseToggler,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  directives: {
    Ripple,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => { },
    },
  },
  data() {
    return {
      fluxAddress: '',
    };
  },
  computed: {
    ...mapState('flux', [
      'userconfig',
      'config',
      'privilege',
    ]),
  },
  mounted() {
    this.fluxAddress = store.get('fluxAddress');
  },
  methods: {
    changeFluxAddress(value) {
      console.log(value);
      store.set('fluxAddress', value);
      this.fluxAddress = value;
    },
    showToast(variant, title) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title,
          icon: 'BellIcon',
          variant,
        },
      });
    },
    logout() {
      const zelidauth = localStorage.getItem('zelidauth');
      const auth = qs.parse(zelidauth);
      localStorage.removeItem('zelidauth');
      this.$store.commit('flux/setPrivilege', 'none');
      console.log(auth);
      IDService.logoutCurrentSession(zelidauth)
        .then((response) => {
          console.log(response);
          if (response.data.status === 'error') {
            console.log(response.data.data.message);
            // SHOULD NEVER HAPPEN. Do not show any message.
          } else {
            this.showToast('success', response.data.data.message);
            // Redirect to home page
            this.$router.push({ name: 'home' });
          }
        })
        .catch((e) => {
          console.log(e);
          this.showToast('danger', e.toString());
        });
    },
  },
};
</script>
