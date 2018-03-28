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
  inputPriority: number;
  priorityFormControl = new FormControl('', [Validators.min(0)]);
  summary = {};

  constructor(private todoService: TodoService) {
  }

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
    this.todoService.updateTodo(index, row)
      .subscribe(data => {
        row = data;
        console.log('Toggled ', row.title, ' to ', row.completed);
      });
  }

  addTodo() {
    if (this.inputTitle && this.inputPriority) {
      this.todoService.addTodo(this.inputTitle, this.inputPriority)
        .subscribe(data => {
          const todos: Todo[] = this.dataSource.data;
          todos.push(data);
          this.dataSource.data = todos;
          this.inputTitle = '';
          this.getSummary();
        });
    }
  }

  getSummary() {
    const group = {};
    this.dataSource.data.forEach((ele) => {
      if (!group[ele.priority]) {
        group[ele.priority] = [ele];
      } else {
        group[ele.priority].push(ele);
      }
    });

    for (let k in group) {
      if (group[k].length > 1) {
        this.summary[k] = group[k].length;
      }
    }
  }

  removeRow(index, row) {
    console.log('Removing ', row.title, '(', index, ')');

    this.todoService.deleteTodo(index)
      .subscribe(data => {
        const todos: Todo[] = this.dataSource.data;
        todos.splice(index, 1);
        this.dataSource.data = todos;
      });
  }

  updateRow(index, row) {
    this.todoService.updateTodo(index, row)
      .subscribe(data => {
        row = data;
        this.editRow = -1;
      });
  }
}


