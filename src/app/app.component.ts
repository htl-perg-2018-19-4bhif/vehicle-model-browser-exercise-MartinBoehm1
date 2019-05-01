import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="pokemons">Pokemons</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'router-demo';
}
