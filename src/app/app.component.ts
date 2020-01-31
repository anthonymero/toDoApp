import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(

  ) {
  }

  title = 'toDoApp';

  todoList = [
    {
      id: 1,
      title: 'task 01',
      details: 'task 01 details'
    },
    {
      id: 2,
      title: 'task 2',
      details: 'task 2 details'
    },
    {
      id: 3,
      title: 'task 3',
      details: 'task 3 details'
    },

  ];

  doneList = [];

}
