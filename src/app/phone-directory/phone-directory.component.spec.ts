import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDirectoryComponent } from './phone-directory.component';

describe('PhoneDirectoryComponent', () => {
  let component: PhoneDirectoryComponent;
  let fixture: ComponentFixture<PhoneDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
