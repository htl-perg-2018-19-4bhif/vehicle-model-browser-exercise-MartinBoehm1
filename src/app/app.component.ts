import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="about">About</a></li>
      <li><a routerLink="models">Models</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'router-demo';
}
