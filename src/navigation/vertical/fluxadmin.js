export default [
  {
    header: 'Flux Admin',
    privilege: ['user', 'admin', 'fluxteam'],
  },
  {
    title: 'Logged Sessions',
    icon: 'regular/id-badge',
    route: 'fluxadmin-loggedsessions',
    privilege: ['admin', 'fluxteam'],
  },
  {
    title: 'Manage Flux',
    icon: 'dice-d20',
    route: 'fluxadmin-manageflux',
    privilege: ['admin', 'fluxteam'],
  },
  {
    title: 'Manage Daemon',
    icon: 'cog',
    route: 'fluxadmin-managedaemon',
    privilege: ['admin', 'fluxteam'],
  },
  {
    title: 'Manage Benchmark',
    icon: 'microchip',
    route: 'fluxadmin-managebenchmark',
    privilege: ['admin', 'fluxteam'],
  },
  {
    title: 'Manage Users',
    icon: 'fingerprint',
    route: 'fluxadmin-manageusers',
    privilege: ['admin', 'fluxteam'],
  },
];
