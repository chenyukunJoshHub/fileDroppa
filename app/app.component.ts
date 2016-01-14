import {Component, EventEmitter} from 'angular2/core';
import {FileDropZone} from '../src/index'

@Component({
    selector: 'my-app',
    directives: [FileDropZone],
    template: `<fileDropZone ></fileDropZone>`
})

export class AppComponent {
    uploadEvent;
    files=[];

    constructor() {
        this.uploadEvent = new EventEmitter();
    }

    fileUploaded(files) {
        console.log(files);
    }

    uploadFiles() {
        this.uploadEvent.emit();
    }
}
