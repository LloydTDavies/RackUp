import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from '@rack-up/ui';
import { MatNavList, MatListItem } from '@angular/material/list';

const components = [AppShellComponent, MatNavList, MatListItem];

@Component({
  standalone: true,
  imports: [RouterModule, ...components],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'RackUp-Admin';
}
