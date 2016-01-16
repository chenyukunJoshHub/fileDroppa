import {Component, Input, EventEmitter, Output} from 'angular2/core';
import {FileInput} from './FileInput';
import {FileDroppa} from './FileDroppa';
import {FileList} from './FileList';

@Component({
    selector: 'fileDropZone',
    directives: [FileInput, FileDroppa, FileList],
    template: `
            <fileDroppa [class]="config.customClass"
                (fileUploaded)="handleFiles($event)"
                [overCls]="config.overCls">
            </fileDroppa>
            <fileInput (fileUploaded)="handleFiles($event)"></fileInput>
            <fileList [files]="files">
                <div *ngFor="#file of files">
                {{file.name}}
                </div>
            </fileList>
    `
})

export class FileDropZone{
    private _config:Object = {};
    private _files = [];

    constructor(){};
    
    @Input() set config(config:Object) {
           this._config = config ? Object.assign(config, this._config) : this._config;
           console.log('this._config', this._config)
    }   
    
    @Output() fileUploaded = new EventEmitter();
    
    get config():Object {
        return this._config;
    }
    
    get files():File[]{
        return this._files;
    }

    set files(files:File[]) {
        this._files = files;
    }
    
     handleFiles(files) {
        this.files = files;
        this.fileUploaded.emit(files);
    }
}

