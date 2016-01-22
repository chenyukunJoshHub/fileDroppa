import {Component, Input, EventEmitter, Output} from 'angular2/core';
import {EmitterService} from '../Services/Emitter.service';
import {FileDroppa} from './FileDroppa';
import {FileList} from './FileList';

@Component({
    selector: 'fileDropZone',
    directives: [FileDroppa, FileList],
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
            <fileList [url]="config.uploadUrl" (notifyFilesUpdated)="notifyFilesUpdated($event)" [uploadFiles]="uploadFiles" [removeAllFiles]="removeAllFiles"></fileList>
            <button (click)="upload($event)">Upload All Files</button>
            <button (click)="remove($event)">Remove All Files</button>
    `
})

export class FileDropZone {
    private _config:Object = {};
    public uploadFiles = new EventEmitter();
    public removeAllFiles = new EventEmitter();

    constructor() {
    };

    @Input() set config(config:Object) {
        this._config = config ? Object.assign(config, this._config) : this._config;
    }

    @Output() filesUpdated:EventEmitter<Array<File>> = new EventEmitter();

    get config():Object {
        return this._config;
    }

    upload(){
        this.uploadFiles.emit();
    }

    remove(){
        this.removeAllFiles.emit();
    }

    notifyFilesUpdated(files:Array<File>) {
        this.filesUpdated.emit(files);
    }
}

