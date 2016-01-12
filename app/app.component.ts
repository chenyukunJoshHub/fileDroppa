import {Component, EventEmitter} from 'angular2/core';
import {FileDropZone} from "../src/FileDropZone";
import {FileDroppa} from "../src/FileDroppa";
import {FileList} from "../src/FileList";

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
    //    //The only one question is how to let user override each of underlying components
//    //This is our/ default implementation which we going to support
//    //template: `<div fileDropZone>
//    //                <div fileDroppa
//    //                    (fileUploaded)="fileUploaded($event)"
//    //                    [overCls]="'customDrop'"
//    //                    [fireUpdate]="uploadEvent">
//    //                </div>
//    //                <fileInput (fileUploaded)="fileUploaded($event)"></fileInput>
//    //                <fileList>
//    //                    <file *ngFor="#file of files">
//    //                </fileList>
//    //                <button (click)="uploadFiles"/>Upload</button>
//    //            </div>
//    //            `,
//    template: `<div fileDroppa (fileUploaded)="fileUploaded($event)" [overCls]="'customDrop'"></div>`,
//
})

export class AppComponent {
    uploadEvent;
    files;

    constructor() {
        this.uploadEvent = new EventEmitter();
    }

    fileUploaded(files) {
        this.files = files;
    }

    uploadFiles() {
        this.uploadEvent.emit();
    }
}
