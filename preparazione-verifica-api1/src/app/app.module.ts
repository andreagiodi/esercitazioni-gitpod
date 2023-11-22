import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { SpecificTeamComponent } from './specific-team/specific-team.component';
import { SpecificStadiumComponent } from './specific-stadium/specific-stadium.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    SpecificTeamComponent,
    SpecificStadiumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
