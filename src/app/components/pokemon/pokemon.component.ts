import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  dataPokemon:  any;
  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(){
    this.pokeService.get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
    .subscribe(res => {
      this.dataPokemon = res;
      console.log('this.dataPokemon -->', this.dataPokemon);
      
    })
  }
}
