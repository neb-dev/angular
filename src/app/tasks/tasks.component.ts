import { Component, input } from '@angular/core';
import { DummyUser } from '../dummy-users';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input.required<DummyUser>(); // (typeof DUMMY_USERS)[number]
  // @Input() user: DummyUser | null = null;
  tasks = DUMMY_TASKS;

  get userName() {
    return this.user().name;
    // return this.user?.name;
  }

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.user().id);
  }

  completeTask(taskId: string) {
    console.log('task id: ' + taskId);
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
