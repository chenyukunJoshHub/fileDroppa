import {Component, EventEmitter} from 'angular2/core';
import {FileDropZone, FileDroppa, FileList, FileInput} from '../src/index'

@Component({
    selector: 'my-app',
    directives: [FileDropZone, FileDroppa, FileList, FileInput],
    styles: [`
        div {
            width:400px;
            height:400px;
            background:grey;
        }
        .customDrop {
            border:2px solid black;
        }
    `],
    template: `<div fileDropZone>
                    <div fileDroppa
                        (fileUploaded)="fileUploaded($event)"
                        [overCls]="'customDrop'">
                    </div>
                    <fileInput (fileUploaded)="fileUploaded($event)"></fileInput>
                    <fileList>
                    </fileList>
               </div>`
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
