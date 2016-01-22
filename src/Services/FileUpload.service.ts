import {Injectable, EventEmitter, Output, Input} from "angular2/core";
import {iFile} from "./fileStore.service";

@Injectable()
export class FileUpload {
    //@Output() onProgress = new EventEmitter();
    //@Output() onSuccess = new EventEmitter();
    //@Output() onError = new EventEmitter();
    static url:string;
    constructor(private iFile:iFile){

    }
    uploadFile() {
        if(!FileUpload.url){
            throw "url to upload needs to be provided";
        }
        let that = this,
            xhr = new XMLHttpRequest(),
            formData = new FormData();

        formData.append(`${this.iFile.File.name}`, this.iFile.File);

        xhr.upload.onprogress = (event) => {
            let progress = (event.loaded * 100) / event.total;
            this.iFile.percentage = progress;
        };

        xhr.onload = xhr.onerror = function() {
            if (this.status == 200) {
                that.iFile.loading = false;
                that.iFile.loadingSuccessful = true;
            } else {
                that.iFile.loading = false;
                that.iFile.loadingSuccessful = false;
            }
        };

        //TODO: move url to config
        xhr.open("POST", url, true);
        xhr.send(formData);

    }
}     
