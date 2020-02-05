import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from '../shared/create-task-dialog/create-task-dialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input() todoList: any[];
  @Input() doneList: any[];

  createdTask;


  constructor(
    private readonly dialog: MatDialog,
  ) { }

  ngOnInit() {
    console.log(this.todoList);

  }
  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  openCreateTaskDialog(): void {
    const dialogRef = this.dialog.open(CreateTaskDialogComponent);
    dialogRef.afterClosed().subscribe(data => {
      this.createdTask = data;
      this.todoList.push( this.createdTask);
    });
  }

  onAddTask(): any {
    // Open dialog addTaskDialog
    console.log('Open dialog addTaskDialog');

    this.openCreateTaskDialog();

  }

  onDelete(task): void {
    console.log(task);
    alert(`delete ${task.title}`);
  }

  onEdit(task): void {
    console.log(task);
    alert(`edit ${task.title}`);
    // Open dialog editTaskDialog

  }

}
