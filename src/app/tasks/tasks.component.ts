import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input() todoList: any[];
  @Input() doneList: any[];

  constructor() { }

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

  onAddTask(): any {
    // Open dialog addTaskDialog
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
