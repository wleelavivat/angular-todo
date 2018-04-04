import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Todo} from '../../shared/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Todo>();
  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {  }

  ngOnInit() {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      priority: [null, [Validators.required, Validators.min(1)]],
    });
  }

  prepareFormModel(): Todo {
    const todo: Todo = this.todoForm.value;
    todo.completed = false;
    return todo;
  }

  onSubmit(formDirective: FormGroupDirective): void {
    if (!this.todoForm.valid) {
      this.validateAllFormFields(this.todoForm);
      return;
    }
    const todo: Todo = this.prepareFormModel();
    this.submitted.emit(todo);
    this.todoForm.reset();
    formDirective.resetForm();
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
