import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPokemon() {
    const url = 'https://pokeapi.co/api/v2/type'

    return this.http.get(url)
  }
  /*
  getBeersByName(name : string) {
    const url = `https://api.punkapi.com/v2/beers?beer_name=${name}`

    return this.http.get(url)
  }

  getBeerByID(id : string) {
    const url = `https://api.punkapi.com/v2/beers/${id}`

    return this.http.get(url)
  }
  */
}

