import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemsPokemonComponent } from './items-pokemon/items-pokemon.component';
import { SpecificItemComponent } from './specific-item/specific-item.component';


const routes: Routes = [             
  {path: '', component: ItemsPokemonComponent},
  {path: 'item/:name', component: SpecificItemComponent},      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }