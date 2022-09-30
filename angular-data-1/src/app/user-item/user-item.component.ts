import {
  Component,
  OnInit,
  Input // <--- aggiungi questo
 } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})

export class UserItemComponent implements OnInit {
  @Input() "name": string; // <-- Aggiungi la notazione @input

  constructor() {
     // Rimuovi l'impostazione del nome
  }

  ngOnInit() {}
}