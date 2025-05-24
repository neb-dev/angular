import { Component, input, output } from '@angular/core';
import { DummyTask } from '../../dummy-tasks';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<DummyTask>(); // (typeof dummyTasks)[number]
  completedTask = output<string>();

  complete() {
    this.completedTask.emit(this.task().id);
  }
}
