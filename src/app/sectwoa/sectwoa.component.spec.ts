import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectwoaComponent } from './sectwoa.component';

describe('SectwoaComponent', () => {
  let component: SectwoaComponent;
  let fixture: ComponentFixture<SectwoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectwoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectwoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
