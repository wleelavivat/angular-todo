export interface ITodo {
  completed: Boolean;
  title: String;
  priority: number;
}

export class Todo implements ITodo {
  completed: Boolean;
  title: String;
  priority: number;

  constructor(title: String, priority: number, completed = false) {
    this.title = title.trim();
    this.priority = priority;
    this.completed = completed;
  }
}
