export interface ITodo {
  completed: Boolean;
  title: String;
}

export class Todo implements ITodo {
  completed: Boolean;
  title: String;

  constructor(title: String, completed = false) {
    this.title = title.trim();
    this.completed = completed;
  }
}
