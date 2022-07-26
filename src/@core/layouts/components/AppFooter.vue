<template>
  <p class="clearfix mb-0">
    <span class="float-md-left d-block d-md-inline-block mt-25">
      <b-link
        class="ml-25"
        href="https://github.com/runonflux/flux"
        target="_blank"
      >Flux, Your Gateway to a Decentralized World</b-link>
    </span>

    <span class="float-md-right d-none d-md-block">FluxNodes monitor beta
    </span>
  </p>
</template>

<script>
import { mapState } from 'vuex';
import { BLink } from 'bootstrap-vue';

export default {
  components: {
    BLink,
  },
  computed: {
    ...mapState('flux', [
      'fluxVersion',
    ]),
  },
  mounted() {
  },
  methods: {
  },
};
</script>
