import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'fileItem',
    styles:[`
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
        <div *ngIf="file">
            <span>{{index}} {{file.name}}</span>
            <span>{{file.size}} bytes</span>
            <span (click)=removeFileListener(index) class='item-remove'>remove</span>
        </div> 
    `,
    inputs: ['file', 'index']
})

export class File {
    public file;
    public index;
    
    @Output() removeFile = new EventEmitter();
    
    removeFileListener(file) {
        this.removeFile && this.removeFile.emit(file);
    }
};