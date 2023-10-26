import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsPokemonComponent } from './items-pokemon/items-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { SpecificItemComponent } from './specific-item/specific-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsPokemonComponent,
    SpecificItemComponent
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
