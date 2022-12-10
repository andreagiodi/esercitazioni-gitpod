import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './models/booking.model';
import { Room } from './models/room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //implements Oninit
  title = 'hotel';
  obsRooms! : Observable<Booking[]>
  data! : Booking[];
  selectedRoom : Room = new Room();
  constructor(private http : HttpClient) 
  {

  }
  //----------------------------25:08 minuti del video tutorial-------------
  ngOnInit(): void {
    this.obsRooms = this.http.get<Booking[]>('https://my-json-server.typicode.com/malizia-g/hotel/booking');
    this.obsRooms.subscribe(this.fatiqualcosa)

  }
  fatiqualcosa = (data : Booking[]) => {
    this.data = data;
  }
}
