import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLabelComponent } from './dialog-label.component';

describe('DialogLabelComponent', () => {
  let component: DialogLabelComponent;
  let fixture: ComponentFixture<DialogLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
