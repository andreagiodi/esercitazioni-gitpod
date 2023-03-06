import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OggettoComponent } from './oggetto/oggetto.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'oggetto/:id', component: OggettoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
