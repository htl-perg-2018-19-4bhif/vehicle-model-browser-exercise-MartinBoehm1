import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button routerLink="about">About</button>
      <button routerLink="models">Models</button><br><br>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'router-demo';
}
