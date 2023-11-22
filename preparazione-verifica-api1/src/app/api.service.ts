import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private rapidApiKey = '8aa6196893msh88b3ee02c1af94fp12c8e8jsn5054e5c94b29';
  private rapidApiHost = 'api-football-v1.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  getTeams() {
    const url = `https://v3.football.api-sports.io/teams?country=italy`;
    const headers = new HttpHeaders({
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "7905cac3b82d2067530efb104dcba2a3"
      
    });

    let Fixture = this.http.get(url, { headers: headers });
    return Fixture;
  }

  getSpecificTeam(arg: string) {
    const url = `https://v3.football.api-sports.io/teams?id=` + arg;
    const headers = new HttpHeaders({
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "7905cac3b82d2067530efb104dcba2a3"
      
    });
    let Fixture = this.http.get(url, { headers: headers });
    return Fixture;
  }

  getSpecificVenue(arg: string) {
    const url = `https://v3.football.api-sports.io/venues?id=` + arg;
    const headers = new HttpHeaders({
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "7905cac3b82d2067530efb104dcba2a3"
      
    });
    let Fixture = this.http.get(url, { headers: headers });
    return Fixture;
  }


}
