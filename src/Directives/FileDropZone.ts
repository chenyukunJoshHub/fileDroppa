import {Component, Input, EventEmitter, Output} from 'angular2/core';
import {EmitterService} from '../Services/Emitter.service';
import {FileDroppa} from './FileDroppa';
import {FileList} from './FileList';

@Component({
    selector: 'fileDropZone',
    directives: [FileDroppa, FileList],
    providers: [EmitterService],
    styles: [`
        .fileDroppa {
            border: 3px dashed #DDD;
            border-radius:10px;
            padding:10px;
            width:300px;
            height:150px;
            color:#CCC;
            text-align:center;
            display:table-cell;
            vertical-align:middle;
            cursor:pointer;
        }
    `],
    template: `
            <div fileDroppa [class]="config.customClass"
                (fileUploaded)="updateFileList($event, 'added')"
                [overCls]="config.overCls">
                Drop files here or click to select
            </div>
            <br/>
            <div *ngIf="files.length">
                <fileList [files]="files" (fileRemoved)="updateFileList($event, 'removed')"></fileList>
                <button (click)="uploadFileList()">Upload All Files</button>
                <button (click)="clearFileList()">Remove All Files</button>
            </div>
    `
})

export class FileDropZone {
    private _config:Object = {};
    private _files = [];

    public startUpload = new EventEmitter();

    constructor() {
    };

    @Input() set config(config:Object) {
        this._config = config ? Object.assign(config, this._config) : this._config;
    }

    @Output() filesUploaded = new EventEmitter();

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
        this.filesUploaded && this.filesUploaded.emit(this.files);
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
        EmitterService.get('doUpload').emit(this.config["uploadUrl"]);
    }

    clearFileList() {
        this.files = [];
    }
}

