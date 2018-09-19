import { Component, OnInit } from '@angular/core';
import {FileUploadModule} from 'primeng/fileupload';
// import {MessageService} from '../../../components/common/messageservice';

@Component({
  selector: 'app-fileuplaoder',
  templateUrl: './fileuplaoder.component.html',
  styleUrls: ['./fileuplaoder.component.css']
})
export class FileuplaoderComponent implements OnInit {

  uploadedFiles: any[] = [];

  constructor() {}

  ngOnInit() {
  }

  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
}