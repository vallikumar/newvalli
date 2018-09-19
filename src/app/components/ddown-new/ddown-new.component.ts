import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ddown-new',
  templateUrl: './ddown-new.component.html',
  styleUrls: ['./ddown-new.component.css']
})
export class DdownNewComponent implements OnInit {
  @Input() fields: Array<String>;
  @Output() reporter = new EventEmitter<String>();
  buttonText: String;
  constructor() {
    this.buttonText = 'Select from drop-down';
   }

  ngOnInit() {
  }
  onChange(updatedVal){
    this.reporter.emit(updatedVal.name);
    this.buttonText = updatedVal.name;
  }
}
