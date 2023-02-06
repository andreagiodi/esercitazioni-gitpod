import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const headers = new HttpHeaders({Authorization: environment.oauthToken});
//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})

export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  
  constructor(private http: HttpClient) { }



  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        environment.oauthToken
    });
    
    return this.http.get(url, { headers });
  }

  getArtist(id: string) {
    const url = `https://api.spotify.com/v1/artists/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCOXkaavmuErM9HE35Rc-_Y3fq110ZtcLWM0IxHkSXINA-1N1UuPu0Xw7CJ9mlhqLi76wteAGkWtdWXS3ll0CSPmf9MQogp_heS4u0_OGBC4UtFp8_28cLjw-r-kK09GX8BQnmhMCTZuIxN16HANROSYzq0QZuH79BAPKLRTEngNijzPiRP_bxU6gOhJAlDdz3E'
    });
    
    return this.http.get(url, { headers });
  }

  

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        environment.oauthToken
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}