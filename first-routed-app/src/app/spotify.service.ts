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
        'Bearer BQB6_hjY-H49qNXXNaTsAQC-lIDWRewplRP_khd9tg9za4qCFrVyPNOBCuqEXPPidQssbXhkWqKN4Z8BRH203AzjpLvgwTinJvXFFMVUOhHSk_UC3SjawrmjNWUWJChIbpn167KbCobhgwBwTYXBTmgcWJ4ZfZiBTFVlygJ6C5UYxpsejjWOHJCpsC-ZIu1x'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}