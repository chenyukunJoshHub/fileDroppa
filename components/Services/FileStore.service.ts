import {Injectable, EventEmitter} from "angular2/core";
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

@Injectable()
export class FilesStore {
    static instance:FilesStore;
    static isCreating:Boolean = false;
    static fileUploaded = new EventEmitter(true);

    constructor() {
        if (!FilesStore.isCreating) {
            throw new Error("You can't call new in Singleton instances!");
        }
    }

    static getInstance() {
        if (FilesStore.instance == null) {
            FilesStore.isCreating = true;
            FilesStore.instance = new FilesStore();
            FilesStore.isCreating = false;
        }

        return FilesStore.instance;
    }

    private WSfiles:WeakSet<File> = new WeakSet();
    private _iFiles:Array<iFile> = [];

    public get files():Array<File> {
        return this.iFiles.reduce((res, iFile:iFile)=> {
            res.push(iFile.File);
            return res;
        }, []);
    }

    public get iFiles() {
        return this._iFiles;
    }

    public set iFiles(files) {
        this._iFiles = files;
    }

    public addFiles(files):void {
        files = files.filter((file)=> {
            if (!this.WSfiles.has(file)) {
                this.WSfiles.add(file);
                return true;
            }
        }).map((file)=> {
            let iFile = {
                File: file,
                loading: false,
                percentage: 0,
                removing: false,
                id:Math.random().toString(36).substr(2),
                loadingSuccessful: false,
                fileUploaded:new EventEmitter(),
                uploader: null
            };
            iFile.fileUploaded.subscribe(([success, response, iFile])=>{
                this.fileUploaded(success, response, iFile);
            });
            iFile.uploader = new FileUpload(iFile);
            return iFile;
        });
        this.iFiles = [...this.iFiles, ...files];
    }

    public fileUploaded(success, response, iFile){
        success && this.removeFiles(iFile);
        FilesStore.fileUploaded.emit([success, response, iFile.File]);
    }

    public removeFiles(iFile:iFile):void {
        this.WSfiles.delete(iFile.File);
        this.iFiles = this.iFiles.filter((item)=>{
            return item.id !== iFile.id;
        });
    }

    public clearStore():void {
        this.iFiles.forEach((iFile)=> {
            this.WSfiles.delete(iFile.File);
        });
        this.iFiles = [];
    }
}