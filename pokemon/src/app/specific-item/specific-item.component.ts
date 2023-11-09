import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common'

@Component({
  selector: 'app-specific-item',
  templateUrl: './specific-item.component.html',
  styleUrls: ['./specific-item.component.css']
})
export class SpecificItemComponent {
  routeObs!: Observable<ParamMap>; 
  obsBeers! : any
  data! : any

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
    
    this.obsBeers = this.service.getSpecificCategory(ItemId)
    this.obsBeers.subscribe((data: any) => { this.results = data; console.log(this.results) });
    console.log(this.results)
  }

 

  back(){ 
    this.location.back();
  }


  getLastPart(arg: string) {
    return arg.split("/")[6]
  }

  
}
