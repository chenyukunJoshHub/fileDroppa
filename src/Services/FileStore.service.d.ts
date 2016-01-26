import { FileUpload } from "./FileUpload.service";
export interface iFile {
    File: File;
    removing: boolean;
    loading: boolean;
    percentage: number;
    loadingSuccessful: boolean;
    uploader: FileUpload;
}
export declare class FilesStore {
    static instance: FilesStore;
    static isCreating: Boolean;
    constructor();
    static getInstance(): FilesStore;
    private WSfiles;
    private _iFiles;
    files: Array<File>;
    iFiles: iFile[];
    addFiles(files: any): void;
    removeFiles(iFile: iFile, index: number): void;
    clearStore(): void;
}
