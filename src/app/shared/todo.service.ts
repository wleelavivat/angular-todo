import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Todo } from './todo';

@Injectable()
export class TodoService {
  todoRestURL = environment.todoRestURL;

  constructor(private http: HttpClient) {
  }

  getTodoList () {
    return this.http.get<Todo[]>(this.todoRestURL);
  }

  addTodo (todo: Todo) {
    return this.http.post<Todo>(this.todoRestURL, todo);
  }

  updateTodo (todo: Todo) {
    return this.http.put<Todo>(this.todoRestURL + todo.id, todo);
  }

  deleteTodo (id: number) {
    return this.http.delete(this.todoRestURL + id);
  }

}
