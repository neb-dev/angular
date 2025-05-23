import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS, DummyUser } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
// import { NgFor, NgIf } from '@angular/common'; legacy if-else and for in app html
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent], // NgIf, NgFor
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';
  users = DUMMY_USERS;
  user: DummyUser | null = null; // (typeof DUMMY_USERS)[number]

  getUser(id: string) {
    this.user = this.users.find((u) => u.id === id) || null;
  }
}
