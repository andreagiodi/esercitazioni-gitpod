import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common'
import { Root } from '../model/squad.model';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent {
  routeObs!: Observable<ParamMap>; 
  obsBeers! : Observable<Root>

  results : any; 
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private location: Location,
    public service: ApiService ) { }


  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let ItemId : any = params.get('id'); 
    

    this.obsBeers = this.service.getTeam(ItemId);
    this.obsBeers.subscribe((data) => { this.results = data; console.log(this.results) });
    console.log(this.results)
  }

 

  back(){ 
    this.location.back();
  }

  getLastPart(arg: string) {
    return arg.split("/")[6]
  }
}
