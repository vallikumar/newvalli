import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecfiveComponent } from './secfive.component';

describe('SecfiveComponent', () => {
  let component: SecfiveComponent;
  let fixture: ComponentFixture<SecfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
