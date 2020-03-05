import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss']
})
export class CreateTaskDialogComponent implements OnInit {

  taskForm: FormGroup;
  taskDatas: any;
  priority = ['hight', 'medium', 'low'];

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,

  ) {
    // this.taskDatas = data.taskDatas;
    console.log('datas', data);

  }

  ngOnInit() {
    // If data !== null 
    // task datas = data
    // else task datas = '';
    const isOnEditMode = this.isOnEditMode(this.data);

    this.taskForm = this.fb.group({
      title: [ !!isOnEditMode ? this.data.title : ''],
      description: [!!isOnEditMode ? this.data.description : ''],
      priority: [!!isOnEditMode ? this.data.priority : ''],
    });
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.taskForm.value);
  }

  private isOnEditMode(data) {
    return data !== null;
  }


}
