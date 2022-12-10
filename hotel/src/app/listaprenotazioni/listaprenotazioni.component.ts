import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../models/booking.model';

@Component({
  selector: 'app-listaprenotazioni',
  templateUrl: './listaprenotazioni.component.html',
  styleUrls: ['./listaprenotazioni.component.css']
})
export class ListaprenotazioniComponent{
  @Input() listaPreno!: Booking[];
  constructor() 
  {

  }

  ngOnInit(): void {

  }
}
