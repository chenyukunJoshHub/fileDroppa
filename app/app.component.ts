import {Component, EventEmitter} from 'angular2/core';
import {FileDropZone} from '../src/index'

@Component({
    selector: 'my-app',
    directives: [FileDropZone],
    template: `<fileDropZone 
                    [config]=fileDroppaConfig 
                    (fileUploaded)="fileUploaded($event)">
               </fileDropZone>`
})

export class AppComponent {
    uploadEvent;
    fileDroppaConfig;
    files=[];

    constructor() {
        this.uploadEvent = new EventEmitter();
        this.fileDroppaConfig = {
                    customClass: 'fileDroppa',
                    overCls: "customDrop", 
                    uploadEvent: "uploadEvent",
                    fileUploadedListener: "fileUploaded"
                };
    }

    fileUploaded(files) {
        console.log(files);
    }

    uploadFiles() {
        this.uploadEvent.emit();
    }
}
