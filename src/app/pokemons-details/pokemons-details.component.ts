import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface Iability {
  name: string;
  id: number;
}
@Component({
  selector: 'app-pokemons-details',
  templateUrl: './pokemons-details.component.html',
  styleUrls: ['./pokemons-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  public pokemonId = '';
  public pokemonName = '';
  public pokemonSprite='';
  public imgLink='';
  public abilities: Iability[] = [];
  constructor(private route: ActivatedRoute) { 
    route.paramMap.subscribe(map => {
      this.pokemonId = map.get('id');
    });

    fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`).then(response => {
      response.json().then(pokemon => {
        this.pokemonName=pokemon.name;
        this.imgLink=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`;
        let i=1;
        for (i = 1; i<=pokemon.abilities.length; i++) {
          let abilityName = `${pokemon.abilities[i-1].ability.name}`;
          let abilityId = parseInt(`${i}`);
          this.abilities.push({ name: abilityName, id: abilityId });
        }
        this.pokemonSprite=pokemon.sprites.front_default;
      });
    });
  }

  ngOnInit() {
  }

} 
