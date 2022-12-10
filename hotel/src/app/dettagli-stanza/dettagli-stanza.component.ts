import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../models/room.model';

@Component({
  selector: 'app-dettagli-stanza',
  templateUrl: './dettagli-stanza.component.html',
  styleUrls: ['./dettagli-stanza.component.css']
})
export class DettagliStanzaComponent {
  @Input() room!: Room;
  constructor() 
  {

  }

  ngOnInit(): void {

  }

  

}
