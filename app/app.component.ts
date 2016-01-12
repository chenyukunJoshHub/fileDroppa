import {Component, EventEmitter} from 'angular2/core';
import {FileDroppa} from "../src/FileDroppa";

@Component({
    selector: 'my-app',
    directives:[FileDroppa],
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
    template: `<div fileDroppa
                    (fileUploaded)="fileUploaded($event)"
                    [overCls]="'customDrop'"
                    [fireUpdate]="uploadEvent">
                </div>`,
})

export class AppComponent {
    uploadEvent;
    constructor(){
        this.uploadEvent = new EventEmitter();
        window.setTimeout(()=> this.uploadEvent.emit(), 1000*10)
    }
    fileUploaded(files){
        console.log(files);
    }
}
