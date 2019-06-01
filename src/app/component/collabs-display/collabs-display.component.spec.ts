import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabsDisplayComponent } from './collabs-display.component';

describe('CollabsDisplayComponent', () => {
  let component: CollabsDisplayComponent;
  let fixture: ComponentFixture<CollabsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
