import { EventEmitter } from 'angular2/core';
export declare class FileDropZone {
    private _config;
    uploadFiles: EventEmitter<{}>;
    removeAllFiles: EventEmitter<{}>;
    _showButtons: Boolean;
    constructor();
    config: Object;
    filesUpdated: EventEmitter<Array<File>>;
    showButtons: boolean;
    upload(): void;
    remove(): void;
    notifyFilesUpdated(files: Array<File>): void;
}
