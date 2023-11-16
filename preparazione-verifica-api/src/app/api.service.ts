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

  getFootballFixtures(date: string): Observable<any> {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures';

    // Set headers
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.rapidApiKey,
      'X-RapidAPI-Host': this.rapidApiHost
    });

    // Set query parameters
    const params = new HttpParams().set('date', date);

    // Make the GET request
    return this.http.get(url, { headers, params });
  }

  getItem() {
    const url = 'https://pokeapi.co/api/v2/type'

    return this.http.get(url)
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

