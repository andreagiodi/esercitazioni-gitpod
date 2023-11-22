import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  routeObs!: Observable<ParamMap>; 
  obsBeers! : any

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
    //let ItemId : any = params.get('id'); 
    

    this.obsBeers = this.service.getTeams();
    this.obsBeers.subscribe((data: any) => { this.results = data; console.log(this.results) });
    console.log(this.results)
  }

 

  back(){ 
    this.location.back();
  }
}
