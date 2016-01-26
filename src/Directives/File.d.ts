import { EventEmitter } from 'angular2/core';
export declare class File {
    ext: string;
    previewSrc: string;
    fileName: string;
    previewHeight: number;
    ngAfterContentInit(): void;
    file: any;
    index: any;
    percentage: any;
    uploaded: any;
    removeFile: EventEmitter<{}>;
    removeFileListener(): void;
    getFileType(): void;
}
