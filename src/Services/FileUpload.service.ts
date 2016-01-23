import {Injectable, EventEmitter, Output, Input, NgZone} from "angular2/core";
import {iFile} from "./FileStore.service";

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

        let pr = new Promise((resolve, reject)=>{
            xhr.onload = xhr.onerror = function() {
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

        xhr.open("POST", FileUpload.url, true);
        xhr.send(formData);

        return pr;

    }
}     
