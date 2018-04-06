import { Component, OnInit } from '@angular/core';
import { findIndex } from 'lodash';

import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  private _todoList: Todo[];

  constructor(private todoService: TodoService) {
  }

  set todoList(todoList: Todo[]) {
    this._todoList = todoList;
  }

  get todoList() {
    return this._todoList;
  }

  ngOnInit() {
    this.todoService.getTodoList()
      .subscribe(data => {
        this.todoList = data;
      });
  }

  addTodo(todo: Todo) {
    return this.todoService.addTodo(todo)
      .subscribe(data => {
        const todos: Todo[] = [...this.todoList];
        todos.push(data);
        this.todoList = todos;
      });
  }

  updateRow(row: Todo) {
    this.todoService.updateTodo(row)
      .subscribe(data => {
        this.todoList[findIndex(this.todoList, {id: data.id})] = data;
      });
  }

  removeRow(event: any) {
    this.todoService.deleteTodo(event.row.id)
      .subscribe(data => {
        const todos: Todo[] = [...this.todoList];
        todos.splice(event.index, 1);
        this.todoList = todos;
      });
  }

}


