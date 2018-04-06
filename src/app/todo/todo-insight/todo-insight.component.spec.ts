import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInsightComponent } from './todo-insight.component';

describe('TodoInsightComponent', () => {
  let component: TodoInsightComponent;
  let fixture: ComponentFixture<TodoInsightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoInsightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
