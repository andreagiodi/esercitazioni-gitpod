import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { items } from './model/data.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private rapidApiKey = '15f0458aa599f1888ffa38089535e43f';
  private rapidApiHost = 'api-football-v1.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  getFixtures() {
    const url = `https://v3.football.api-sports.io/fixtures?live=all`;
    const headers = new HttpHeaders({
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "15f0458aa599f1888ffa38089535e43f"
      
    });

    let data = this.http.get<items>(url, { headers: headers });
    return data;
  }

  getTeam(arg: string) {
    const url = `https://v3.football.api-sports.io/teams?id=`+ arg;
    const headers = new HttpHeaders({
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "15f0458aa599f1888ffa38089535e43f"
      
    });

    let Teams = this.http.get(url, { headers: headers });
    return Teams;
  }

  getLastpart(arg: string) {
    return arg.split("/")[6]
  }

  getSpecificCategory(arg: string) {
    const url = 'https://pokeapi.co/api/v2/type/' + arg
    return this.http.get(url)
  }
  getSpecificPokemon(arg: string) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + arg
    return this.http.get(url)
  }
}

