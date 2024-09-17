import { InjectionToken } from '@angular/core';

export interface DashboardJourneyConfig {
  mode: 'Admin' | 'User';
}

export const DASHBOARD_CONFIG = new InjectionToken<DashboardJourneyConfig>(
  'DASHBOARD_CONFIG'
);
