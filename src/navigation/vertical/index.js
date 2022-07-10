import dashboard from './dashboard';
import daemon from './daemon';
import benchmark from './benchmark';
import fluxadmin from './fluxadmin';

export default [
  {
    title: 'Home',
    route: 'home',
    icon: 'home',
  },
  ...dashboard,
  ...daemon,
  ...benchmark,
  ...fluxadmin,
];
