import {Component, EventEmitter} from 'angular2/core';
import {FileDropZone} from '../index'

@Component({
    selector: 'my-app',
    directives: [FileDropZone],
    template: `<fileDropZone 
                    [config]="fileDroppaConfig"
                    (fileUploaded)="fileUploaded($event)">
               </fileDropZone>`
})

export class AppComponent {
    uploadEvent;
    fileDroppaConfig;

    constructor() {
        this.uploadEvent = new EventEmitter();
        this.fileDroppaConfig = {
            customClass: 'fileDroppa',
            overCls: "customDrop",
            autoUpload: false,
            uploadUrl: "https://salty-taiga-80701.herokuapp.com/upload"
        };
    }

    fileUploaded(files) {
        console.log(files);
    }

}
