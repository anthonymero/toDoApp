import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

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

  constructor() { }

  getTodoList() {
    return this.todoList;
  }

  addTask(task) {
    this.todoList.push(task);
  }

  deleteTask(id: number) {
    this.todoList.splice(id);
  }

  editTask(task) {
    const taskToUpdate = this.todoList.filter(todo => todo.id === task.id);
    // this.todoList.splice();
  }
}
