import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
 selector: 'app-foo',
 templateUrl: './foo.component.html',
 styleUrls: ['./foo.component.css']
})
export class FooComponent {
   'data': any;
   'loading': boolean;

   constructor(public http: HttpClient) {
    this.get('https://3245-andreagiodi-progettosta-izcgfc5ph41.ws-eu75.gitpod.io/test')
   }

   get(url: string): void {
      this.loading = true;
      this.http.get(url).subscribe(data => {
        this.data = data;
        this.loading = false;
      })
   }
}
