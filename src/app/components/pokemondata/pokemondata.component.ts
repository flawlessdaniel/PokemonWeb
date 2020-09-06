import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PokedexService } from 'app/pokedex.service'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-pokemondata',
  templateUrl: './pokemondata.component.html',
  styleUrls: ['./pokemondata.component.css']
})
export class PokemondataComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pokeService: PokedexService) { }

  public Id: number;
  private sub: any;
  public data = {};

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.Id = +params['id'];

      if (sessionStorage.getItem('token') != null && sessionStorage.getItem('token') != undefined) {
        this.reauthenticacion();
      } else {
        this.authenticacion();
      }
   });
  }

  loadPokemonData() {
    this.pokeService.getPokemonById(this.Id)
    .then((datos) => {
     
      this.data = datos;
      
    })
    .catch((err) => {
      console.log(err);
    });
  }

   //Solo por propositos de muestra de authenticacion del API
   authenticacion() {
    this.pokeService.getToken()
    .then((datos) => {
      sessionStorage.setItem('token', datos);
      this.loadPokemonData();
    })
    .catch((err) => {

    });
  }

  //Solo por propositos de muestra de authenticacion del API
  reauthenticacion() {
    this.pokeService.refreshToken()
    .then((datos) => {
      sessionStorage.setItem('token', datos);
      this.loadPokemonData();
    })
    .catch((err) => {

    });
  }

}
