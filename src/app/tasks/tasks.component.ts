import { Component, input } from '@angular/core';
import { DummyUser } from '../dummy-users';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input.required<DummyUser>(); // (typeof DUMMY_USERS)[number]
  // @Input() user: DummyUser | null = null;
  tasks = DUMMY_TASKS; // reference
  // tasks = [...DUMMY_TASKS] // shallow copy, references nested obj and arr props
  // tasks = structuredClone(DUMMY_TASKS) // deep (modern) copy - everything is copied

  showNewTaskForm = false;

  get userName() {
    return this.user().name;
    // return this.user?.name;
  }

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.user().id);
  }

  get openNewTaskForm() {
    return (this.showNewTaskForm = true);
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
