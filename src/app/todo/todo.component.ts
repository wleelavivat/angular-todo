import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

import {Todo} from '../shared/todo';
import {TodoService} from '../shared/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: Todo[];
  summary = {};

  constructor(private todoService: TodoService) {  }

  ngOnInit() {
    this.todoService.getTodoList()
      .subscribe(data => {
        this.todoList = data;
        this.getSummary();
      });
  }

  addTodo(todo: Todo) {
      return this.todoService.addTodo(todo)
        .subscribe(data => {
          const todos: Todo[] = [...this.todoList];
          todos.push(data);
          this.todoList = todos;
          this.getSummary();
        });
  }

  getSummary() {
    this.summary = {};
    const group = this.todoList.reduce((acc, ele) => {
      if (!acc[ele.priority]) {
        acc[ele.priority] = 0;
      }
      acc[ele.priority]++;
      return acc;
    }, {});

    for (const k in group) {
      if (group[k] > 1) {
        this.summary[k] = group[k];
      }
    }
  }

  updateRow(row: Todo) {
    this.todoService.updateTodo(row)
      .subscribe(data => {
        this.todoList[data.id] = data;
      });
  }

  removeRow(event: object) {
    this.todoService.deleteTodo(event.row.id)
      .subscribe(data => {
        const todos: Todo[] = [...this.todoList];
        todos.splice(event.index, 1);
        this.todoList = todos;
        this.getSummary();
      });
  }

}


