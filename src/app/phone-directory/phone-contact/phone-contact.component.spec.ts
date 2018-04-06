import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneContactComponent } from './phone-contact.component';

describe('PhoneContactComponent', () => {
  let component: PhoneContactComponent;
  let fixture: ComponentFixture<PhoneContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
