import {Component, Input, EventEmitter, Output} from 'angular2/core';
import {File} from './File';

@Component({
    selector: 'fileList',
    directives: [File],
    template: `
        <fileItem *ngFor="#file of files; #i = index" [file]="file" [index]="i" (removeFile)=removeFile($event)></fileItem>
    `
})

export class FileList {
    private _files:any[] = [];

    @Input() set files(files:any[]) {
        this._files = files || this._files;
    }

    @Output() fileRemoved = new EventEmitter();

    get files():any[] {
        return this._files;
    }

    removeFile(index) {
        this._files.splice(index, 1);
        this.fileRemoved.emit(this._files);
    }
}