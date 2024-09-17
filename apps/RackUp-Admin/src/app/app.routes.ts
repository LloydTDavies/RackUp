import { Route } from '@angular/router';


const getTitle = (routeName: string) => `${routeName} - RackUp Admin`;

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('@rack-up/dashboard-shell').then((c) => c.DashboardShellComponent),
    title: getTitle('Dashboard'),
  },
];

