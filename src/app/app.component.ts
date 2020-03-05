import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: 'toDoApp';
  // TODO create intereface
  todoList = [
    // {
    //   id: 1,
    //   title: 'task 01',
    //   details: 'task 01 details',
    //   priority: 'hight',
    // },
    // {
    //   id: 2,
    //   title: 'task 2',
    //   details: 'task 2 details',
    //   priority: 'low',

    // },
    // {
    //   id: 3,
    //   title: 'task 3',
    //   details: 'task 3 details',
    //   priority: 'medium',

    // },

  ];

  doneList = [];

  constructor(
    private readonly taskService: TaskService,

  ) {
  }

  ngOnInit(): void {
    this.todoList = this.taskService.todoList;
  }


}
