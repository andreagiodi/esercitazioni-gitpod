import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQANO7fKl_VGV1OOVybNbAh0TaTfbYNKH6g0DUG3K4Rqd2nh0uhFaBZBOsGbTb7pvjY7ttVBJDov3Jc9Uin2JzA4q3lqZR5tMZ4Pw9HpenwXzMiFqRVXTZv_fwppumNGjjaWOH-Dh_tZq584iCbuZfDDUSNFGO0653czczuQ-CyhQyfkmC_0AXV7JoaEjEQO'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}