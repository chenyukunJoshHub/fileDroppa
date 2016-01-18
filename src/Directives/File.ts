import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {EmitterService} from '../Services/Emitter.service';
import {FileUpload} from '../Services/FileUpload.service';

@Component({
    selector: 'fileItem',
    providers: [FileUpload],
    styles: [`
        div {
            padding-top: 15px;
        }
        div span:first-child {
            padding-left:0;
        }
        span {
            padding-left: 20px;
        }
        span.item-remove {
            cursor: pointer;
        }
    `],
    template: `
        <div *ngIf="file" (startUpload)="uploadFile($event)">
            <span>{{index}} {{file.name}}</span>
            <span>{{file.size}} bytes</span>
            <span *ngIf="file.progress">{{file.progress.loaded}} / {{file.progress.total}}</span>
            <span (click)=removeFileListener(index) class='item-remove'>remove</span>
        </div> 
    `,
    inputs: ['file', 'index']
})

export class File {
    public file;
    public index;

    constructor(private fileUpload:FileUpload) {
        EmitterService.get('doUpload').subscribe(data => {
            fileUpload.uploadFile(this.file);
        });


        fileUpload.onProgress.subscribe((progressData) => {
            this.file.progress = {
                loaded: progressData.loaded,
                total: progressData.total
            };
            console.log(this.file.progress)
        });

        fileUpload.onSuccess.subscribe(() => {

        });
    }

    @Output() removeFile = new EventEmitter();

    removeFileListener(file) {
        this.removeFile && this.removeFile.emit(file);
    }

}
