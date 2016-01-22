import {Injectable, EventEmitter, Output, Input, NgZone} from "angular2/core";
import {iFile} from "./fileStore.service";

@Injectable()
export class FileUpload {
    static url:string;
    private zone = new NgZone({enableLongStackTrace: false});
    constructor(public iFile){
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
            let progress = (event.loaded * 100) / event.total | 0;
            this.zone.run(()=> {
                this.iFile.percentage = progress;
            })
        };

        xhr.onload = xhr.onerror = function() {
            that.zone.run(()=> {
                if (this.status == 200) {
                    that.iFile.loading = false;
                    that.iFile.loadingSuccessful = true;
                } else {
                    that.iFile.loading = false;
                    that.iFile.loadingSuccessful = false;
                }
            })
        };

        this.iFile.loading = true;
        //TODO: move url to config
        xhr.open("POST", FileUpload.url, true);
        xhr.send(formData);

    }
}     
