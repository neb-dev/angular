import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';
  users = DUMMY_USERS;

  onSelect(id: string) {
    console.log(id);
  }
}
