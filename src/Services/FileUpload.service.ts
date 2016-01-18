import {Injectable, EventEmitter, Output} from "angular2/core";

@Injectable() 

export class FileUpload {
    @Output() onProgress = new EventEmitter();
    @Output() onError = new EventEmitter();
    
    upload(files) {
        files.forEach((file, index) => {
            this.uploadFile(file, index);
        });
    }
    
    uploadFile(file, index) {
        let xhr = new XMLHttpRequest(), 
            formData = new FormData();
        
        formData.append(`${file.name}`, file);
        
        xhr.upload.onprogress = (event) => {
            // console.log(event.loaded + ' / ' + event.total);
            this.onProgress.emit([event, index]);
        }

        xhr.onload = xhr.onerror = function() {
            if (this.status == 200) {
            console.log("success");
            } else {
            console.log("error " + this.status);
            }
        };

        //TODO: move url to config
        xhr.open("POST", "http://localhost:9090/upload", true);
        xhr.send(file);

   }
}     
