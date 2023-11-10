import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsPokemonComponent } from './items-pokemon/items-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { SpecificItemComponent } from './specific-item/specific-item.component';
import { SpecificPokemonComponent } from './specific-pokemon/specific-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsPokemonComponent,
    SpecificItemComponent,
    SpecificPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
