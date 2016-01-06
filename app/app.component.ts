import {Component} from 'angular2/core';
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
    template: `
        <div fileDroppa (fileUploaded)="fileUploaded($event)" [overCls]="'customDrop'">
        </div>
    `,
})

export class AppComponent {
    fileUploaded(files){
        console.log(files);
    }
}
