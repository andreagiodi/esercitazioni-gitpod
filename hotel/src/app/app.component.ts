import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './models/booking.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //implements Oninit
  title = 'hotel';
  obsRooms! : Observable<Booking[]>
  data! : Booking[];
  constructor(private http : HttpClient) 
  {

  }
  //----------------------------20:41 minuti del video tutorial-------------
  ngOnInit(): void {
    this.obsRooms = this.http.get<Booking[]>('https://my-json-server.typicode.com/malizia-g/hotel/booking');
    this.obsRooms.subscribe(this.fatiqualcosa)

  }
  fatiqualcosa = (data : Booking[]) => {
    this.data = data;
  }
}
