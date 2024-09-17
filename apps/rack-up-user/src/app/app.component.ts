import { Component } from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from '@rack-up/ui';

const components = [AppShellComponent, MatNavList, MatListItem];

@Component({
  standalone: true,
  imports: [RouterModule, ...components],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rack-up-user';
}
