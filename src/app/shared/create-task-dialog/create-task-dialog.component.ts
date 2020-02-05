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

  }

  ngOnInit() {
    this.taskForm = this.fb.group({
      title: [''],
      description: [''],
      priority: [''],
    });
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.taskForm.value);
  }


}
