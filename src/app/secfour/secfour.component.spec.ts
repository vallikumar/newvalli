import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecfourComponent } from './secfour.component';

describe('SecfourComponent', () => {
  let component: SecfourComponent;
  let fixture: ComponentFixture<SecfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
