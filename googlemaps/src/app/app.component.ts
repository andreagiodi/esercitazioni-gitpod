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
  position : any;
  label :string;
  circleOptions: any;
  markerOptions: google.maps.MarkerOptions;
  
  constructor()
  {

    


    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
    }

    
  
    this.markerOptions = {icon:iconData}
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = "ciao";
    this.circleOptions = {fillColor : 'red'}
  }
}