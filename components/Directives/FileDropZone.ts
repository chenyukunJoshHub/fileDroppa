import {Component, Input, EventEmitter, Output} from 'angular2/core';
import {FileDroppa} from './FileDroppa';
import {FileList} from './FileList';
import {FilesStore} from "../Services/FileStore.service";

@Component({
    selector: 'fileDropZone',
    directives: [FileDroppa, FileList],
    styles: [`
        .file_droppa_internal {
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
                [fs]="filesStore"
                [overCls]="config.overCls">
                Drop files here or click to select
            </div>
            <br/>
            <fileList
                (notifyFilesUpdated)="notifyFilesUpdated($event)"
                [uploadFiles]="uploadFiles"
                [fs]="filesStore"
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
        uploadUrl:null,
        autoUpload:false,
        requestHeaders:{},
        customClass: 'file_droppa_internal'
    };
    public uploadFiles = new EventEmitter();
    public removeAllFiles = new EventEmitter();
    public _showButtons:Boolean = false;

    public filesStore:FilesStore = null;

    constructor() {
        this.filesStore = new FilesStore();
        this.filesStore.fileUploaded.subscribe(([success, response, file])=>{
            this.notifyFileUploaded(success, response, file)
        })
    };

    @Input() set config(config) {
        this._config = config ? Object.assign(this._config, config) : this._config;
        this.filesStore.autoUpload = this._config.autoUpload;
        this.filesStore.requestHeaders = this._config.requestHeaders;
        this.filesStore.url = this._config.uploadUrl;
    }

    @Output() filesUpdated:EventEmitter<Array<File>> = new EventEmitter();
    @Output() fileUploaded:EventEmitter<any> = new EventEmitter();

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

    notifyFileUploaded(success, response, file){
        this.fileUploaded.emit([success, response, file]);
    }
}

