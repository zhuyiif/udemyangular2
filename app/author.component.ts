import {Component} from 'angular2/core'
import {AuthersService} from './authers.service';
@Component({
  selector: 'authers',
  template: `<h2>zack\'s Authers</h2>
            {{title}}
            <ul>
            <li *ngFor = "#auther of authers">
            {{auther}}
            </li>
            </ul>

            `
            ,
  providers: [AuthersService]

})
export class AuthersComponent {
  title = "Authers";
  authers;
  constructor (authersService : AuthersService) {
    this.authers = authersService.getAuthers();
  }

}
