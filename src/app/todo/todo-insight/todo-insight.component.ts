import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { findIndex } from 'lodash';
import { Todo } from '../../shared/todo';

@Component({
  selector: 'app-todo-insight',
  templateUrl: './todo-insight.component.html',
  styleUrls: ['./todo-insight.component.scss']
})
export class TodoInsightComponent implements OnInit, OnChanges {
  @Input() todoList: Todo[];
  insight = {};

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.todoList && changes.todoList.currentValue) {
      this.getInsight();
    }
  }

  getInsight() {
    let priorityCount = this.todoList.reduce((acc, ele) => {
      let index = findIndex(acc, {priority: ele.priority});
      if (index === -1) {
        acc.push({
          priority: ele.priority,
          count: 0
        });
        index = acc.length - 1;
      }
      acc[index].count++;
      return acc;
    }, []);

    priorityCount = priorityCount.filter((ele) => ele.count > 1);
    this.insight['priorityCount'] = priorityCount;
  }

  getPriorityCount() {

  }

}
