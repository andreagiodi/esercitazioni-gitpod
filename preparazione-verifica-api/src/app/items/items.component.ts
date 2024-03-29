import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Data } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common'
import { Root } from '../model/games.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  Data!: Root;
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
    let ItemId : any = params.get('name'); 
    

    this.obsBeers = this.service.getFixtures();
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





