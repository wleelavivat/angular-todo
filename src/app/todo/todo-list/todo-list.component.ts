import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Todo} from '../../shared/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnChanges {
  @Input() todoList: Todo[];
  @Output() updateTodo = new EventEmitter<Todo>();
  @Output() removeTodo = new EventEmitter<any>();

  displayedColumns = ['completed', 'title', 'priority', 'remove'];
  dataSource = new MatTableDataSource<Todo>();
  editRow: number;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.todoList && changes.todoList.currentValue) {
      this.dataSource.data = changes.todoList.currentValue;
    }
  }

  setEditing(index) {
    this.editRow = index;
  }

  toggleRow(row) {
    row.completed = !row.completed;
    this.updateTodo.emit(row);
  }

  updateRow(index, row) {
    this.updateTodo.emit(row);
    this.editRow = -1;
  }

  removeRow(index, row) {
    this.removeTodo.emit({index, row});
  }

}
