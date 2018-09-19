import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesTextComponent } from './yes-text.component';

describe('YesTextComponent', () => {
  let component: YesTextComponent;
  let fixture: ComponentFixture<YesTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
