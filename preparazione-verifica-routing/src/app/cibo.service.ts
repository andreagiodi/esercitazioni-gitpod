import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})

export class CiboService {

  //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  
  constructor(private http: HttpClient) { }



  getOggetto(id: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${id}&page_size=10&json=true`;
    
    return this.http.get(url);
  }

  getSpecificheOggetto(code: string) {
    const url = `https://world.openfoodfacts.org/api/v0/product/${code}`;
    
    return this.http.get(url);
  }
  
 
}
