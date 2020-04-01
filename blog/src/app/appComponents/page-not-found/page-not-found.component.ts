import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <a [routerLink]="['/home']">GÅ tilbage</a>
  <p>
  404 Fejl
 </p>
 `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
