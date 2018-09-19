import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecthreemtdComponent } from './secthreemtd.component';

describe('SecthreemtdComponent', () => {
  let component: SecthreemtdComponent;
  let fixture: ComponentFixture<SecthreemtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecthreemtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecthreemtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
