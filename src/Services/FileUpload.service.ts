import {Injectable, EventEmitter, Output, Input, NgZone} from "angular2/core";
import {iFile} from "./FileStore.service";

@Injectable()
export class FileUpload {
    static url:string;
    static autoUpload:boolean=false;
    private zone = new NgZone({enableLongStackTrace: false});
    private xhr;
    constructor(public iFile){
        FileUpload.autoUpload && this.uploadFile();
    }
    abortUploading(){
        this.xhr.loading && this.xhr.abort();
    }
    uploadFile() {
        if(!FileUpload.url){
            throw "url to upload needs to be provided";
        }
        if(this.iFile.loading){
            throw "Already under loading";
        }
        let that = this,
            formData = new FormData();

        this.xhr = new XMLHttpRequest();

        formData.append(`${this.iFile.File.name}`, this.iFile.File);

        this.xhr.upload.onprogress = (event) => {
            let progress = (event.loaded * 100) / event.total | 0;
            this.zone.run(()=> {
                this.iFile.percentage = progress;
            })
        };

        let pr = new Promise((resolve, reject)=>{
            this.xhr.onload = this.xhr.onerror = function() {
                that.zone.run(()=> {
                    if (this["status"] == 200) {
                        that.iFile.loading = false;
                        that.iFile.loadingSuccessful = true;
                        resolve();
                    } else {
                        that.iFile.loading = false;
                        that.iFile.loadingSuccessful = false;
                        reject();
                    }
                })
            };
        });


        this.iFile.loading = true;

        this.xhr.open("POST", FileUpload.url, true);
        this.xhr.send(formData);

        return pr;

    }
}     
