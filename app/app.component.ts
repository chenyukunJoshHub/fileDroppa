import {Component, EventEmitter} from 'angular2/core';
import {FileDropZone} from "../src/Directives/FileDropZone";
import {FileDroppa} from "../src/Directives/FileDroppa";
import {FileList} from "../src/Directives/FileList";

@Component({
    selector: 'my-app',
    directives: [FileDropZone, FileDroppa, FileList],
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
