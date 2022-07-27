import axios from 'axios';

const Api = () => axios.create({
  baseURL: 'https://fusion.runonflux.io',
});

export default {
  getInfo() {
    return Api().get('/swap/info');
  },
};
