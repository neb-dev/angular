import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../tasks.types';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  newTask: NewTask = {
    title: '',
    summary: '',
    dueDate: '',
  };
  closeDialog = output();
  submittedTask = output<NewTask>(); // typeof this.newTask

  handleCloseDialog() {
    this.closeDialog.emit();
  }

  handleSubmit() {
    this.submittedTask.emit(this.newTask);
  }
}
