import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdownNewComponent } from './ddown-new.component';

describe('DdownNewComponent', () => {
  let component: DdownNewComponent;
  let fixture: ComponentFixture<DdownNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdownNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdownNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
