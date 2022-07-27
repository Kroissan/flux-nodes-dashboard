import config from 'ZelBack/config/default';
import axios from "axios"

const CUMULUS_REWARD_RATIO = 7.5 / 100;
const NIMBUS_REWARD_RATIO = 12.5 / 100;
const STRATUS_REWARD_RATIO = 30 / 100;

export default {
  namespaced: true,
  state: {
    userconfig: {
      zelid: '',
      externalip: '',
    },
    config: {
      apiPort: config.server.apiport,
      fluxTeamZelId: config.fluxTeamZelId,
    },
    privilege: 'none', // user, admin, fluxteam
    fluxVersion: '',
    xdaoOpen: 0,
    blockReward: null,
  },
  getters: {
    xdaoOpen(state) {
      return state.xdaoOpen;
    },
  },
  mutations: {
    setPrivilege(state, privilege) {
      state.privilege = privilege;
    },
    setFluxVersion(state, version) {
      state.fluxVersion = version;
    },
    setUserZelid(state, zelid) {
      state.userconfig.zelid = zelid;
    },
    setUserIp(state, externalip) {
      state.userconfig.externalip = externalip;
    },
    setFluxPort(state, port) {
      state.config.apiPort = port;
    },
    setXDAOOpen(state, open) {
      state.xdaoOpen = open;
    },
  },
  actions: {
  },
};
