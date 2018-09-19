import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuplaoderComponent } from './fileuplaoder.component';

describe('FileuplaoderComponent', () => {
  let component: FileuplaoderComponent;
  let fixture: ComponentFixture<FileuplaoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileuplaoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuplaoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
