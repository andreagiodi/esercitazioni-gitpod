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
        'Bearer BQD6CiixS6LcUDn6M4CQhbG95NICovFxVt-xA0K1joaD46fqHfmNK8TOHv6szcZ6CQlD-dbWmLAEzSFwpVxCKexWmHAH_g-ixC4C4o8jYNmAvb5eXgYHPI9Wdj4sxX1-BGGr7DUcRVBXvMDWLA3_Y50DiEtX3R2A16nCFuiSN2seAqnmhvGWQx3DbPlaGfFUN_Td'
    });
    
    return this.http.get(url, { headers });
  }

  getAlbum(id: string) {
    const url = `https://api.spotify.com/v1/albums/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDhIFjGyA48B5aUQ7FaMB_VY9pnIPtGM-7JHbXbLFb1juFbxngK2l8xnH08J6sMEvpxRSG0ifd6cJy6qOJxdIvPat2yGorSTQMlbpOJv9QkT-9F1v-4WQFchJLYZtZOPeb46Wa906qr1L-kKPK0yuxbaf3UfBEDGt4UXp8-l6KvDvJIowjgJ97X3UgqqYlPVSKb'
    });
    
    return this.http.get(url, { headers });
  }

  getAlbumTracks(id: string) {
    const url = `https://api.spotify.com/v1/albums/${id}/tracks`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQD_Irdxn5SZDLK1MVjlcvfNfJrKzSbjm9Zo-B_u2jLAT-6-Iqd9BjnV13dvnqYd-DooO73sv6apFcDcMlC80yhOVaHBAnPvNQyJQWx_qDtprcrzgKEKt2mtSmV6wG09xPEgOOo9CC8dz2ef_7ACSSE9lhXzpFKNEOwMFhVb7PbmAlQpT4xXADqd3MecqGMsFH6w'
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