import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivas-ejemplo';
  nombre = 'Robert Rocky Balboa';
  constructor(){
    const usersService = new UsersService();
    console.log('%c' + usersService.getUsers() , 'background.color:red; color: yellow;');
  }
}
