//import {Component, EventEmitter} from 'angular2/core';
//import {FileDroppa} from "../src/FileDroppa";
//
//@Component({
//    selector: 'my-app',
//    directives:[FileDroppa],
//    styles: [`
//        div {
//            width:400px;
//            height:400px;
//            background:grey;
//        }
//        .customDrop {
//            border:2px solid black;
//        }
//    `],
//    //Here user doesn't want to use our button/fileList
//    //Everything he needs to do is export fileDroppa
//    //and subscribe for fileUploaded and implement fireUpdate by himself
//    template: `
//                    <div fileDroppa
//                        (fileUploaded)="fileUploaded($event)"
//                        [overCls]="'customDrop'"
//                        [fireUpdate]="uploadEvent">
//                    </div>
//                    <fileInput (fileUploaded)="fileUploaded($event)"></fileInput>
//                    <userCustomFileList>
//                        <userCustomFile *ngFor="#file of files">
//                    </userCustomFileList>
//                    <userCustomButton (click)="uploadFiles"/>Upload</userCustomButton>
//                `,
//})
//
//export class AppComponent {
//    uploadEvent;
//    files;
//    constructor(){
//        this.uploadEvent = new EventEmitter();
//    }
//    fileUploaded(files){
//        this.files = files;
//    }
//    uploadFiles(){
//        this.uploadEvent.emit();
//    }
//}
