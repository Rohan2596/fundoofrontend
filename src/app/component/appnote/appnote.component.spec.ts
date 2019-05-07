import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppnoteComponent } from './appnote.component';

describe('AppnoteComponent', () => {
  let component: AppnoteComponent;
  let fixture: ComponentFixture<AppnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
