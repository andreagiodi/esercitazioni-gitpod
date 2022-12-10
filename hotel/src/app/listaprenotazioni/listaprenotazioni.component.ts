import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../models/booking.model';
import {Room} from '../models/room.model';

@Component({
  selector: 'app-listaprenotazioni',
  templateUrl: './listaprenotazioni.component.html',
  styleUrls: ['./listaprenotazioni.component.css']
})
export class ListaprenotazioniComponent{
  @Input() listaPreno!: Booking[];
  @Input() room! : Room;
  constructor() 
  {

  }

  ngOnInit(): void {

  }

  mostraDett(room : Room) 
  {
    this.room.id = room.id;
    this.room.name = room.name;
    this.room.num_D_bed = room.num_D_bed;
    this.room.num_S_bed = room.num_S_bed;
  }
}
