import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  // common module is like browsermodule, but browser module is only for the root module that gets bootstrapped
  // common module is for sub modules
  imports: [CommonModule, FormsModule, SharedModule],
});
export class TasksModule {}
