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
                (notifyFilesUpdated)="notifyFilesUpdated($event)"
                [overCls]="config.overCls">
                Drop files here or click to select
            </div>
            <br/>
            <fileList (notifyFilesUpdated)="notifyFilesUpdated($event)"></fileList>
            <button (click)="uploadFileList()">Upload All Files</button>
            <button (click)="clearFileList()">Remove All Files</button>
    `
})

export class FileDropZone {
    private _config:Object = {};

    constructor() {
    };

    @Input() set config(config:Object) {
        this._config = config ? Object.assign(config, this._config) : this._config;
    }

    @Output() filesUpdated:EventEmitter<Array<File>> = new EventEmitter();

    get config():Object {
        return this._config;
    }

    notifyFilesUpdated(files:Array<File>) {
        this.filesUpdated.emit(files);
    }

    uploadFileList() {
        EmitterService.get('doUpload').emit(this.config["uploadUrl"]);
    }
}

