import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemondataComponent } from './pokemondata/pokemondata.component';

const componentRoutes: Routes = [
    { path: 'home', redirectTo: 'pokedex', pathMatch: 'full' },
    { path: 'pokedex',          component: PokedexComponent },
    { path: 'pokemondata/:id',      component: PokemondataComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(componentRoutes)
  ],
  exports: [
  ],
})
export class ComponentRoutingModule { }