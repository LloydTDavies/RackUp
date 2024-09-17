import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DASHBOARD_CONFIG } from '@rack-up/dashboard-config';

@Component({
  selector: 'lib-dashboard-shell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-shell.component.html',
  styleUrl: './dashboard-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardShellComponent {
  config = inject(DASHBOARD_CONFIG) || { mode: 'Admin' };
}
