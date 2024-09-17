import { TestBed } from '@angular/core/testing';
import { DashboardShellComponent } from './dashboard-shell.component';
import { DASHBOARD_CONFIG } from '@rack-up/dashboard-config';

interface DashboardJourneyConfig {
  mode: 'Admin' | 'User';
}

describe('DashboardShellComponent', () => {
 const createComponent = (config: DashboardJourneyConfig) => {
   TestBed.configureTestingModule({
    providers: [
      { provide: DASHBOARD_CONFIG, useValue: config }
    ]
   });

   return TestBed.createComponent(DashboardShellComponent);
 }

 describe('Dashboard config', () => {
   it('should be Admin', () => {
     const fixture = createComponent({ mode: 'Admin' });
     fixture.detectChanges();
     expect(fixture.componentInstance.config.mode).toBe('Admin');
   });

   it('should be User', () => {
     const fixture = createComponent({ mode: 'User' });
     fixture.detectChanges();
     expect(fixture.componentInstance.config.mode).toBe('User');
   });
 });
});
