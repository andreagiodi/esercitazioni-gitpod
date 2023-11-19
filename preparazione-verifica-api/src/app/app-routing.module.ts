import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { SquadComponent } from './squad/squad.component';


const routes: Routes = [             
  {path: '', component: ItemsComponent},  
  {path: 'item/:id', component: SquadComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }