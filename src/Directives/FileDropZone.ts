import {Component, Input, EventEmitter, Output} from 'angular2/core';
import {FileUpload} from '../Services/FileUpload.service';
import {FileDroppa} from './FileDroppa';
import {FileList} from './FileList';

@Component({
    selector: 'fileDropZone',
    directives: [FileDroppa, FileList],
    providers: [FileUpload],
    template: `
            <fileDroppa [class]="config.customClass"
                (fileUploaded)="updateFileList($event, 'added')"
                [overCls]="config.overCls">
            </fileDroppa>
            
            <br/><br/>
            
             <div fileDroppa [class]="config.customClass"
                (fileUploaded)="updateFileList($event, 'added')"
                [overCls]="config.overCls">
            </div>
            <div *ngIf="files.length">
                <fileList [files]="files" (fileRemoved)="updateFileList($event, 'removed')"></fileList>
                <button (click)="uploadFileList()">Upload All Files</button>
            </div>
    `
})

export class FileDropZone {
    private _config:Object = {};
    private _files = [];

    constructor(private fileUpload:FileUpload) {
        //TODO: discuss where to better to put it - maybe in File component
        fileUpload.onProgress.subscribe((progressData)=> {
            this.notifyAboutProgress(progressData);
        });
    };

    @Input() set config(config:Object) {
        this._config = config ? Object.assign(config, this._config) : this._config;
        console.log('this._config', this._config)
    }

    @Output() fileUploaded = new EventEmitter();

    get config():Object {
        return this._config;
    }

    get files():any[] {
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

    uploadFileList() {
        this.fileUpload.upload(this._files);
    }

    notifyAboutProgress(progressData) {
        let progress = progressData[0],
            index = progressData[1];

        this._files[index].progress = {
            loaded: progress.loaded,
            total: progress.total
        };

        console.log(progress)
    }
}

