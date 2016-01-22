import {Injectable, EventEmitter, Output, Input} from "angular2/core";

@Injectable()

export class FileUpload {
    @Output() onProgress = new EventEmitter();
    @Output() onSuccess = new EventEmitter();
    @Output() onError = new EventEmitter();

    uploadFile(file, url) {
        if(!url){
            throw "url to upload needs to be provided";
        }
        let that = this,
            xhr = new XMLHttpRequest(),
            formData = new FormData();

        formData.append(`${file.name}`, file);

        xhr.upload.onprogress = (event) => {
            let progress = (event.loaded * 100) / event.total;
            
            this.onProgress.emit(progress | 0);
        };

        xhr.onload = xhr.onerror = function () {
            if (this.status == 200) {
                console.log("success");
                that.onSuccess.emit(true);
            } else {
                console.log("error " + this.status);
                that.onError.emit(true);
            }
        };

        //TODO: move url to config
        xhr.open("POST", url, true);
        xhr.send(formData);

    }
}     
