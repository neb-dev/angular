import { Component, input } from '@angular/core';
import { DummyTask, dummyTasks } from '../../dummy-tasks';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<DummyTask>(); // (typeof dummyTasks)[number]
}
