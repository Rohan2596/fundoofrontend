import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderDisplayComponent } from './reminder-display.component';

describe('ReminderDisplayComponent', () => {
  let component: ReminderDisplayComponent;
  let fixture: ComponentFixture<ReminderDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
