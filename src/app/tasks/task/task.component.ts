import { Component, input, output } from '@angular/core';
import { DummyTask } from '../../dummy-tasks';
import { CardComponent } from '../../ui/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
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
