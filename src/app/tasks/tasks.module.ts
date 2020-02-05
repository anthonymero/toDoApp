import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTaskDialogComponent } from './edit-task-dialog/edit-task-dialog.component';
import { CreateTaskDialogComponent } from './create-task-dialog/create-task-dialog.component';
import { MatDialogModule } from '@angular/material';
import { AppMaterialModule } from '../app-material.module';



@NgModule({
  declarations: [EditTaskDialogComponent, CreateTaskDialogComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    MatDialogModule
  ],
  entryComponents: [CreateTaskDialogComponent, EditTaskDialogComponent]
})
export class TasksModule { }
