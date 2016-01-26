export declare class FileUpload {
    iFile: any;
    static url: string;
    static autoUpload: boolean;
    private zone;
    private xhr;
    constructor(iFile: any);
    abortUploading(): void;
    uploadFile(): Promise<{}>;
}
