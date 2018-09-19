import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecthreealarmComponent } from './secthreealarm.component';

describe('SecthreealarmComponent', () => {
  let component: SecthreealarmComponent;
  let fixture: ComponentFixture<SecthreealarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecthreealarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecthreealarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
