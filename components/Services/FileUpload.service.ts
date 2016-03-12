import {Injectable, EventEmitter, Output, Input, NgZone} from "angular2/core";

@Injectable()
export class FileUpload {
    private zone = new NgZone({enableLongStackTrace: false});
    private xhr;

    constructor(public iFile, public autoUpload, public requestHeaders, public url, public beforeUpload) {
        autoUpload && this.uploadFile();
    }

    abortUploading() {
        (this.xhr && this.xhr.loading) && this.xhr.abort();
    }

    uploadFile() {
        if (!this.url) {
            throw "url to upload needs to be provided";
        }
        if (this.iFile.loading) {
            throw "Already under loading";
        }
        let that = this,
            formData = new FormData();

        this.xhr = new XMLHttpRequest();

        if(typeof this.beforeUpload === "function"){
            let [name, value, filename] = this.beforeUpload(this.iFile.File)
            formData.append(name, value, filename);
        } else {
            formData.append(`${this.iFile.File.name}`, this.iFile.File);
        }

        this.xhr.upload.onprogress = (event) => {
            let progress = (event.loaded * 100) / event.total | 0;
            this.zone.run(()=> {
                this.iFile.percentage = progress;
            })
        };

        let pr = new Promise((resolve, reject)=> {
            this.xhr.onload = this.xhr.onerror = function (e) {
                that.zone.run(()=> {
                    if (this["status"] == 200) {
                        that.iFile.loading = false;
                        that.iFile.loadingSuccessful = true;
                        that.iFile.fileUploaded.emit([true, that.xhr.response, that.iFile]);
                        resolve();
                    } else {
                        that.iFile.loading = false;
                        that.iFile.loadingSuccessful = false;
                        that.iFile.fileUploaded.emit([false, that.xhr.response, that.iFile]);
                        reject();
                    }
                })
            };
        });

        this.iFile.loading = true;

        this.xhr.open("POST", this.url, true);
        if(this.requestHeaders && typeof this.requestHeaders === 'object'){
            Object.keys(this.requestHeaders).forEach((key)=>{
                this.xhr.setRequestHeader(key, this.requestHeaders[key]);
            })
        }
        this.xhr.send(formData);

        return pr;

    }
}     
