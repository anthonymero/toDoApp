import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { CreateTaskDialogComponent } from './create-task-dialog/create-task-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  CreateTaskDialogComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [CreateTaskDialogComponent]
})
export class SharedModule { }
