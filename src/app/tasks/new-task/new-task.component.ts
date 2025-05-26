import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../tasks.types';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  newTask: NewTask = {
    title: '',
    summary: '',
    dueDate: '',
  };
  closeDialog = output();
  submittedTask = output<NewTask>(); // typeof this.newTask

  // dependency injection using angular inject
  private tasksService = inject(TasksService);

  handleCloseDialog() {
    this.closeDialog.emit();
  }

  handleSubmit() {
    // this.submittedTask.emit(this.newTask);
    this.tasksService.addTask(this.newTask, this.userId());
    this.closeDialog.emit();
  }
}
