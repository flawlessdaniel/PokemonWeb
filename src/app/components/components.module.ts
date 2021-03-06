import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemondataComponent } from './pokemondata/pokemondata.component';
import { ComponentRoutingModule } from './components.routing';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        ComponentRoutingModule,
        InfiniteScrollModule
    ],
    declarations: [
        ComponentsComponent,
        PokedexComponent,
        PokemondataComponent
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }