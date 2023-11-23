import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from './model/games.model';
import { Root as RootSquad } from './model/squad.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getFixtures(): Observable<Root> {
    const url = `https://v3.football.api-sports.io/fixtures?live=all`;
    const headers = new HttpHeaders({
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "15f0458aa599f1888ffa38089535e43f"
      
    });

    let data = this.http.get<Root>(url, { headers: headers });
    return data;
  }

  getTeam(arg: string): Observable<RootSquad> {
    const url = `https://v3.football.api-sports.io/teams?id=`+ arg;
    const headers = new HttpHeaders({
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "15f0458aa599f1888ffa38089535e43f"
      
    });

    let Teams = this.http.get<RootSquad>(url, { headers: headers });
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

