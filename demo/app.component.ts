import {Component, EventEmitter} from 'angular2/core';
import {FileDropZone} from '../index'

@Component({
    selector: 'my-app',
    directives: [FileDropZone],
    template: `<fileDropZone 
                    [config]="fileDroppaConfig"
                    (filesUpdated)="filesUpdated($event)"
                    (fileUploaded)="fileUploaded($event)"
                    >
               </fileDropZone>`
})
export class AppComponent {
    fileDroppaConfig;

    constructor() {
        this.fileDroppaConfig = {
            overCls: "customDrop",
            autoUpload: false,
            uploadUrl: "https://salty-taiga-80701.herokuapp.com/upload",
            beforeUpload: this.beforeUpload
            //requestHeaders:{
            //    'X-Content':'xxx'
            //}
        };
    }

    beforeUpload(file){
        return new Promise((res, rej)=>{
           setTimeout(()=>{
               res(["nameYouLike", file]);
           },1000)
        });
        //return ["nameYouLike", file];
    }

    fileUploaded([success, response, file]){
        success && console.log("uploaded - awesome", response, file);
        success || console.log("not uploaded - very bad", response, file);
    }

    filesUpdated(files) {
        console.log("added", files)
    }

}
