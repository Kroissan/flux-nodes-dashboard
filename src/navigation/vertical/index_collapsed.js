import collapsedDashboard from './dashboard_collapsed';
import collapsedDaemon from './daemon_collapsed';
import collapsedBenchmark from './benchmark_collapsed';
import collapsedFluxadmin from './fluxadmin_collapsed';

export default [
  {
    title: 'Home',
    route: 'home',
    icon: 'home',
  },
  ...collapsedDashboard,
  ...collapsedDaemon,
  ...collapsedBenchmark,
  ...collapsedFluxadmin,
];
