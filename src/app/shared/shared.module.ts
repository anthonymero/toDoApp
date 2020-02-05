import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { CreateTaskDialogComponent } from './create-task-dialog/create-task-dialog.component';

const components = [
  CreateTaskDialogComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  entryComponents: [CreateTaskDialogComponent]
})
export class SharedModule { }
