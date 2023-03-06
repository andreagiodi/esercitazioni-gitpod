import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CiboService } from '../cibo.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common'

@Component({
  selector: 'app-oggetto',
  templateUrl: './oggetto.component.html',
  styleUrls: ['./oggetto.component.css']
})
export class OggettoComponent implements OnInit{
  routeObs!: Observable<ParamMap>; 
  spotifyServiceObs! : any

  track : any; //Qui salverò la traccia selezionata
  
  //Usiamo la dependency injection per farci mandare i moduli del routing e dello    
  //SpotifyService
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private location: Location,
    public service: CiboService ) { }


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let trackId : any = params.get('id'); //Ottengo l'id dai parametri
    console.log (trackId); //Stampo su console
    //spotifyServiceObs va dichiarato
    this.spotifyServiceObs = this.service.getSpecificheOggetto(trackId);
    this.spotifyServiceObs.subscribe((data: any) => { this.track = data; console.log(this.track) });
    console.log(this.track)
  }

  back(){ 
    this.location.back();
  }
}
