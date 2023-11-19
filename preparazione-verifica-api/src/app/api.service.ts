import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private rapidApiKey = '8aa6196893msh88b3ee02c1af94fp12c8e8jsn5054e5c94b29';
  private rapidApiHost = 'api-football-v1.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  getFixtures() {
    const url = `https://v3.football.api-sports.io/fixtures?live=all`;
    const headers = new HttpHeaders({
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "0507ba789af897bea3a33413a8669eb5"
      
    });

    let Fixture = this.http.get(url, { headers: headers });
    return Fixture;
  }

  getTeam(arg: string) {
    const url = `https://v3.football.api-sports.io/teams?id=`+ arg;
    const headers = new HttpHeaders({
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "0507ba789af897bea3a33413a8669eb5"
      
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

