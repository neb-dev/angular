import { Component, input } from '@angular/core';
import { DummyUser } from '../dummy-users';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './tasks.types';

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
  showNewTaskDialog = false;

  get userName() {
    return this.user().name;
    // return this.user?.name;
  }

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.user().id);
  }

  get openNewTaskDialog() {
    return (this.showNewTaskDialog = true);
  }

  get closeNewTaskDialog() {
    return (this.showNewTaskDialog = false);
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  addNewTask(task: NewTask) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.user().id,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });
    this.showNewTaskDialog = false;
  }
}
