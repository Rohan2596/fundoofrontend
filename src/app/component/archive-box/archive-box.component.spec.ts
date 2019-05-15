import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveBoxComponent } from './archive-box.component';

describe('ArchiveBoxComponent', () => {
  let component: ArchiveBoxComponent;
  let fixture: ComponentFixture<ArchiveBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
