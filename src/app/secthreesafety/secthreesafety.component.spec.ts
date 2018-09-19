import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecthreesafetyComponent } from './secthreesafety.component';

describe('SecthreesafetyComponent', () => {
  let component: SecthreesafetyComponent;
  let fixture: ComponentFixture<SecthreesafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecthreesafetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecthreesafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
