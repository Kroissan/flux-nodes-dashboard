import axios from 'axios';

const sourceCancelToken = axios.CancelToken.source();

export { sourceCancelToken };

export default () => axios.create({
  baseURL: 'https://explorer.runonflux.io/api',
});
