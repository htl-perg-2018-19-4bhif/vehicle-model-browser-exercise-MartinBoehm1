import { Component, OnInit } from '@angular/core';

interface Ipokemon {
  name: string;
  id: number;
}
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonComponent implements OnInit {
  public pokemons: Ipokemon[] = [];
  
  value='';
  onKey(event: any) { // without type info
    this.pokemons=[];
    this.value=event.target.value;
    this.getPokemon();
  }

  constructor() {
    this.getPokemon();
  }
  ngOnInit() {
  }
  async getPokemon() {
    let i;

    
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=964`).then(response => {
      response.json().then(pokemon => {
        for (i = 1; i<=pokemon.results.length; i++) {
          if(`${pokemon.results[i-1].name}`.includes(this.value)){
            let pokename = `${pokemon.results[i-1].name}`;
            let pokeid = parseInt(`${i}`);
            this.pokemons.push({ name: pokename, id: pokeid });
          }
        }
      });
    });
  }

}
