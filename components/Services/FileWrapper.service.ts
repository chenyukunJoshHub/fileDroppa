import {EventEmitter} from "angular2/core";
import {FileUpload} from "./FileUpload.service";

export interface iFile {
    File:File,
    removing:boolean,
    loading:boolean,
    percentage:number,
    id:string,
    loadingSuccessful:boolean,
    fileUploaded:any,
    uploader:FileUpload
}

export class FileWrapper {
    public File;
    public loading = false;
    public percentage = 0;
    public removing = false;
    public id = Math.random().toString(36).substr(2);
    public loadingSuccessful = false;
    public fileUploaded = new EventEmitter();
    public uploader = null;

    constructor(file, uploadConfig){
        this.File = file;
        this.uploader = new FileUpload(this,
            uploadConfig.autoUpload, uploadConfig.requestHeaders,
            uploadConfig.uploadUrl, uploadConfig.beforeUpload);
    }
}