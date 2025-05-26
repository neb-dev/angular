import { Component, input } from '@angular/core';
import { DummyUser } from '../dummy-users';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

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

  // tasks now managed by tasks.service.ts
  // tasks = DUMMY_TASKS; // reference
  // tasks = [...DUMMY_TASKS] // shallow copy, references nested obj and arr props
  // tasks = structuredClone(DUMMY_TASKS) // deep (modern) copy - everything is copied
  showNewTaskDialog = false;

  // dependency injection using tasks.service.ts
  // private tasksService: TasksService
  constructor(private tasksService: TasksService) {
    // this.tasksService = tasksService
  }

  // dependency injection using angular inject
  // private tasksService = inject(TasksService)

  get userName() {
    return this.user().name;
    // return this.user?.name;
  }

  get userTasks() {
    return this.tasksService.getUserTasks(this.user().id);
    // return this.tasks.filter((task) => task.userId === this.user().id);
  }

  get openNewTaskDialog() {
    return (this.showNewTaskDialog = true);
  }

  get closeNewTaskDialog() {
    return (this.showNewTaskDialog = false);
  }

  // now handled by angular dep inject in task component
  // completeTask(taskId: string) {
  //   // this.tasks = this.tasks.filter((task) => task.id !== taskId);
  //   // this.tasksService.completeTask(taskId);
  // }

  // now handled by angular dep inject
  // addNewTask(task: NewTask) {
  //   this.tasks.push({
  //     id: new Date().getTime().toString(),
  //     userId: this.user().id,
  //     title: task.title,
  //     summary: task.summary,
  //     dueDate: task.dueDate,
  //   });
  //   this.showNewTaskDialog = false;
  // }
}
