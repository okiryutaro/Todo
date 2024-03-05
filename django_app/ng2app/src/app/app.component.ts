import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, AppRoutingModule],
  template: `
    <h1 class="text-center">
      <span class="title">{{ title }}</span>
      <p class="sub-title">{{ subtitle }}</p>
    </h1>
    <router-outlet></router-outlet>
    `,
  styles: [
    '.title { color: #ee6e73;}',
    '.sub-title { font-size: small; }'
  ],
})
export class AppComponent {
  title = 'Simple Todo';
  subtitle = 'Angular2 + Django Rest Framework !!!'
}
