import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashBoxComponent } from './trash-box.component';

describe('TrashBoxComponent', () => {
  let component: TrashBoxComponent;
  let fixture: ComponentFixture<TrashBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
