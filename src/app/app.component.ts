import { Component } from '@angular/core';

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
      details: 'task 01 details',
      priority: 'hight',
    },
    {
      id: 2,
      title: 'task 2',
      details: 'task 2 details',
      priority: 'low',

    },
    {
      id: 3,
      title: 'task 3',
      details: 'task 3 details',
      priority: 'medium',

    },

  ];

  doneList = [];

}
