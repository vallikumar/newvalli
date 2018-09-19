import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecthreeothComponent } from './secthreeoth.component';

describe('SecthreeothComponent', () => {
  let component: SecthreeothComponent;
  let fixture: ComponentFixture<SecthreeothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecthreeothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecthreeothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
