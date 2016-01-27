import {Component, Input, EventEmitter, Output} from 'angular2/core';
import {FileDroppa} from './FileDroppa';
import {FileList} from './FileList';

@Component({
    selector: 'fileDropZone',
    directives: [FileDroppa, FileList],
    styles: [`
        [filedroppa] {
            border: 3px dashed #DDD;
            border-radius:10px;
            padding:10px;
            width:400px;
            height:200px;
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
            <fileList
                [url]="config.uploadUrl"
                [autoUpload]="config.autoUpload"
                (notifyFilesUpdated)="notifyFilesUpdated($event)"
                [uploadFiles]="uploadFiles"
                [removeAllFiles]="removeAllFiles">
            </fileList>
            <div *ngIf="showButtons">
                <button (click)="upload($event)">Upload All Files</button>
                <button (click)="remove($event)">Remove All Files</button>
            </div>


    `
})

export class FileDropZone {
    private _config = {
        autoUpload: false
    };
    public uploadFiles = new EventEmitter();
    public removeAllFiles = new EventEmitter();
    public _showButtons:Boolean = false;

    constructor() {
    };

    @Input() set config(config) {
        this._config = config ? Object.assign(this._config, config) : this._config;
    }

    @Output() filesUpdated:EventEmitter<Array<File>> = new EventEmitter();

    set showButtons(flag:boolean) {
        this._showButtons = flag;
    }

    get showButtons() {
        return this._showButtons && !this._config["autoUpload"];
    }

    get config() {
        return this._config;
    }

    upload() {
        this.uploadFiles.emit(true);
    }

    remove() {
        this.removeAllFiles.emit(true);
    }

    notifyFilesUpdated(files:Array<File>) {
        this.filesUpdated.emit(files);
        this.showButtons = !!files.length;
    }
}

