import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  macchine: string[];
  constructor() {
    this.macchine = ['Ruspa','Autocarro','Gru','Terna','Escavatore','Finitrice','Trencher','Betoniera','Dumper','Compressore']
   }

  ngOnInit(): void {
  }

}
