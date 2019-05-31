import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCollabratorsComponent } from './dialog-collabrators.component';

describe('DialogCollabratorsComponent', () => {
  let component: DialogCollabratorsComponent;
  let fixture: ComponentFixture<DialogCollabratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCollabratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCollabratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
