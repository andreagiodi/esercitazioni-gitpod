import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { SpecificTeamComponent } from './specific-team/specific-team.component';
import { SpecificStadiumComponent } from './specific-stadium/specific-stadium.component';

const routes: Routes = [
  {path: '', component: TeamsComponent},
  {path: 'teamid/:id', component: SpecificTeamComponent},
  {path: 'venueid/:id', component: SpecificStadiumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
