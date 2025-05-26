import { Component, inject, input, output } from '@angular/core';
import { DummyTask } from '../../dummy-tasks';
import { CardComponent } from '../../ui/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<DummyTask>(); // (typeof dummyTasks)[number]
  completedTask = output<string>();
  private tasksService = inject(TasksService);
  complete() {
    // this.completedTask.emit(this.task().id);
    this.tasksService.completeTask(this.task().id);
  }
}
