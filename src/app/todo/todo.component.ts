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
  displayedColumns = ['completed', 'title', 'priority', 'remove'];
  dataSource = new MatTableDataSource<Todo>();
  editRow: number;
  inputTitle: String = '';
  summary = {};

  constructor(private todoService: TodoService) {  }

  ngOnInit() {
    this.todoService.getTodoList()
      .subscribe(data => {
        this.dataSource.data = data;
        this.getSummary();
      });
  }

  setEditing(index) {
    this.editRow = index;
  }

  toggleRow(index, row) {
    row.completed = !row.completed;
    this.todoService.updateTodo(row)
      .subscribe(data => {
        row = data;
        console.log('Toggled ', row.title, ' to ', row.completed);
      });
  }

  addTodo(todo: Todo) {
      return this.todoService.addTodo(todo)
        .subscribe(data => {
          const todos: Todo[] = this.dataSource.data;
          todos.push(data);
          this.dataSource.data = todos;
          this.inputTitle = '';
          this.getSummary();
        });
  }

  getSummary() {
    this.summary = {};
    const group = this.dataSource.data.reduce((acc, ele) => {
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

  removeRow(index, row) {
    console.log('Removing ', row.title, '(', index, ')');

    this.todoService.deleteTodo(row.id)
      .subscribe(data => {
        const todos: Todo[] = this.dataSource.data;
        todos.splice(index, 1);
        this.dataSource.data = todos;
        this.getSummary();
      });
  }

  updateRow(index, row) {
    this.todoService.updateTodo(row)
      .subscribe(data => {
        row = data;
        this.editRow = -1;
        this.getSummary();
      });
  }
}


