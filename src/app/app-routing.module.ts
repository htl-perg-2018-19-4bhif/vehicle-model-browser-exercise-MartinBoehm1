import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemons/pokemons.component';
import { PokemonDetailsComponent } from './pokemons-details/pokemons-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pokemons'},
  { path: 'pokemons', component: PokemonComponent },
  { path: 'pokemons/:id', component: PokemonDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
