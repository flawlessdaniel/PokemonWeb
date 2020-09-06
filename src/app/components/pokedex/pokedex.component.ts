import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PokedexService } from 'app/pokedex.service';
import { Router } from '@angular/router';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor(private pokedex: PokedexService, private router: Router) { 
    this.Pokemons = "";
  }

  public Pokemons: string;
  public todaladata = [];
  public data = [];
  public actualindex = 0;
  public search: string;

  ngOnInit(): void {
    if (sessionStorage.getItem('token') != null && sessionStorage.getItem('token') != undefined) {
      this.reauthenticacion();
    } else {
      this.authenticacion();
    }
  }

  //Solo por propositos de muestra de authenticacion del API
  authenticacion() {
    this.pokedex.getToken()
    .then((datos) => {
      sessionStorage.setItem('token', datos);
      this.loadPokemons();
    })
    .catch((err) => {

    });
  }

  //Solo por propositos de muestra de authenticacion del API
  reauthenticacion() {
    this.pokedex.refreshToken()
    .then((datos) => {
      sessionStorage.setItem('token', datos);
      this.loadPokemons();
    })
    .catch((err) => {

    });
  }

  loadPokemons() {
    this.pokedex.getPokemons()
    .then((datos) => {

        this.data = [];
        this.todaladata = [];
        this.actualindex = 0;
       
        this.todaladata = Array.of(datos)[0];
        this.add20lines();
        
    })
    .catch((err) => {
        console.log(err);
    });
  }

  loadPokemonsSearch() {
    this.pokedex.getPokemonBySearch(this.search)
      .then((datos) => {
        this.data = [];
        this.todaladata = [];
        this.actualindex = 0;

        this.todaladata = Array.of(datos)[0];
        this.add20lines();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  add20lines() {
    let newtop = (this.actualindex + 20);
    for (let i = this.actualindex; i < newtop; i ++) {
      if ( i < this.todaladata.length) {
        this.data.push(this.todaladata[i]);
        this.actualindex++;
      }
    }
  }

  onScroll() {
    if (this.todaladata.length > 0) {
      this.add20lines();
    }
  }

  searchPokemon(){
    if (this.search.length > 0) {
      this.loadPokemonsSearch();
    } else {
      this.loadPokemons();
    }
  }
}
