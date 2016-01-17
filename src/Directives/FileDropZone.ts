import {Component, Input, EventEmitter, Output} from 'angular2/core';
import {FileDroppa} from './FileDroppa';
import {FileList} from './FileList';

@Component({
    selector: 'fileDropZone',
    directives: [FileDroppa, FileList],
    template: `
            <div fileDroppa [overCls]="'customDrop'" (fileUploaded)="fileUploaded($event)">
            </div>
            <fileList [files]="files" (fileRemoved)="updateFileList($event, 'removed')"></fileList>
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
    
    get files():any[]{
        return this._files;
    }

    set files(files:any[]) {
        this._files = files;
    }
    
    notifyAboutFileChanges() {
        this.fileUploaded && this.fileUploaded.emit(this.files);        
    }
    
    updateFileList(files:any[], type:string) {
        switch (type) {
            case 'added': 
                this.files = (this.files.length) 
                    ? [...this.files, ...files]
                    : files;
                break;
            case 'removed':
                this.files = files;
                break;
            default:
                this.files = [];
                break;
        }
        this.notifyAboutFileChanges();        
    }
}

