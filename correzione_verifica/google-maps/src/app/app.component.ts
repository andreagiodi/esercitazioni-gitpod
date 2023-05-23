import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  active!: boolean;
  position : any;
  label :string;
  jsonny!: any;
  constructor()
  {
    this.jsonny = "./assets/new-york.json"
    for (var i of this.jsonny) {
      
    }
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = "ciao";
  }

  visualizza() {
    this.active = true
  }

}
