import { EventEmitter } from 'angular2/core';
import { iFile } from "../Services/FileStore.service";
export declare class FileList {
    fs: any;
    constructor();
    uploadFiles: any;
    removeAllFiles: any;
    url: any;
    autoUpload: any;
    notifyFilesUpdated: EventEmitter<{}>;
    files: Array<iFile>;
    onRemoveAllFiles(): void;
    removeFile(iFile: iFile, i: any): void;
}
