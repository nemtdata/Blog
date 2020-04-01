import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-login',
  template: `<a [routerLink]="['/home']">Login</a>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
