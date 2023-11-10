import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemsPokemonComponent } from './items-pokemon/items-pokemon.component';
import { SpecificItemComponent } from './specific-item/specific-item.component';
import { SpecificPokemonComponent } from './specific-pokemon/specific-pokemon.component';


const routes: Routes = [             
  {path: '', component: ItemsPokemonComponent},
  {path: 'item/:name', component: SpecificItemComponent},
  {path: 'pokemon/:id', component: SpecificPokemonComponent}      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }