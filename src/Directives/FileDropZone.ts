import {Component, Input, EventEmitter, Output} from 'angular2/core';
import {FileInput} from './FileInput';
import {FileDroppa} from './FileDroppa';
import {FileList} from './FileList';

@Component({
    selector: 'fileDropZone',
    styles: [`
        .fileDroppa {
            width:400px;
            height:400px;
            background:grey;
        }
        .customDrop {
            border:2px solid black;
        }
    `],
    directives: [FileInput, FileDroppa, FileList],
    template: `
            <fileDroppa class="fileDroppa"
                (fileUploaded)="fileUploaded($event)"
                [overCls]="'customDrop'">
            </fileDroppa>
            <fileInput (fileUploaded)="fileUploaded($event)"></fileInput>
            <fileList [files]="files">
                <div *ngFor="#file of files">
                {{file.name}}
                </div>
            </fileList>
    `
})

export class FileDropZone{
    files = [];
    constructor () {
    }
    
    fileUploaded(files) {
        this.files = files;
    }
}

//<div fileDroppa
//(fileUploaded)="fileUploaded($event)"
//    [overCls]="'customDrop'">
//</div>
//<fileInput (fileUploaded)="fileUploaded($event)"></fileInput>
//    <fileList></fileList>