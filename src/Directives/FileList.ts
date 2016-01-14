import {Directive, Input, EventEmitter, Output} from 'angular2/core';

@Directive({
    selector: 'fileList',
})

export class FileList {
    private _files:any[] = [];

    @Input() set files(files:any[]) {
        this._files = files || this._files;
    }
}