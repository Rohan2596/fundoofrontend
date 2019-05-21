import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelDisplayComponent } from './label-display.component';

describe('LabelDisplayComponent', () => {
  let component: LabelDisplayComponent;
  let fixture: ComponentFixture<LabelDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
