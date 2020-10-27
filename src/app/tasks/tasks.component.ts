import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from '../shared/create-task-dialog/create-task-dialog.component';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input() todoList: any[];
  @Input() doneList: any[];
  @Input() todoIndex: number;

  createdTask;


  constructor(
    private readonly dialog: MatDialog,
    private readonly taskService: TaskService,
  ) { }

  ngOnInit() {
    // get todolist
    this.todoList = this.taskService.getTodoList();
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
      if (!!data) {
        this.createdTask = data;
        this.todoList.push(this.createdTask);
      }
    });
  }

  openEditTaskDialog(task): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: task.id,
      title: task.title,
      details: task.details,
      priority: task.priority,
    };
    this.dialog.open(CreateTaskDialogComponent, dialogConfig);
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
    // Open dialog editTaskDialog
    this.openEditTaskDialog(task);

  }

}
