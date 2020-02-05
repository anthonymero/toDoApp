import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss']
})
export class CreateTaskDialogComponent implements OnInit {

  constructor(
    private readonly dialogRef: MatDialogRef<CreateTaskDialogComponent>,
  ) { }

  ngOnInit() {
  }

}
