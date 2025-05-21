import { Component, input } from '@angular/core';
import { DummyUser } from '../dummy-users';

@Component({
  selector: 'app-task',
  imports: [],
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input<DummyUser | null>(); // (typeof DUMMY_USERS)[number]
  // @Input() user: DummyUser | null = null;

  get userName() {
    return this.user()?.name;
    // return this.user?.name;
  }
}
