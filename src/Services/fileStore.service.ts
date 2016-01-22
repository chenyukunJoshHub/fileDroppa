import {Injectable} from 'angular2/core';
import {FileUpload} from "./FileUpload.service";

export interface iFile {
    File:File,
    removing:boolean,
    loading:boolean,
    percentage:number,
    loadingSuccessful:boolean,
    uploader:FileUpload
}

@Injectable()
export class FilesStore{
    static instance:FilesStore;
    static isCreating:Boolean = false;

    constructor() {
        console.log("asd");
        if (!FilesStore.isCreating) {
            throw new Error("You can't call new in Singleton instances!");
        }
    }

    static getInstance() {
        console.log("instance");
        if (FilesStore.instance == null) {
            FilesStore.isCreating = true;
            FilesStore.instance = new FilesStore();
            FilesStore.isCreating = false;
        }

        return FilesStore.instance;
    }

    private WSfiles:WeakSet<File> = new WeakSet();
    private _iFiles:Array<iFile>=[];

    public get files():Array<File>{
        return this.iFiles.reduce((res, iFile:iFile)=>{
            return res.push(iFile.File), res;
        }, []);
    }

    public get iFiles(){
        return this._iFiles;
    }
    public set iFiles(files){
        this._iFiles = files;
    }

    public addFiles(files):void {
        files = files.filter((file)=>{
            if(!this.WSfiles.has(file)){
                this.WSfiles.add(file);
                return true;
            }
        }).map((file)=>{
            let iFile = {
                File:file,
                loading:false,
                percentage:0,
                removing:false,
                loadingSuccessful:false,
                uploader:null
            };
            iFile.uploader = new FileUpload(iFile);
            return iFile;
        });
        this.iFiles = [...this.iFiles, ...files];
    }
    public removeFiles(iFile:iFile, index:number):void{
        this.WSfiles.delete(iFile.File);
        this.iFiles.splice(index, 1);
    }
    public clearStore():void{
        this.iFiles.forEach((iFile)=>{
            this.WSfiles.delete(iFile.File);
        });
        this.iFiles = [];
    }

}