import {Component, Input, EventEmitter, Output, ChangeDetectionStrategy} from 'angular2/core';
import {EmitterService} from '../Services/Emitter.service';
import {File} from './File';
import {FilesStore} from "../Services/fileStore.service";

@Component({
    selector: 'fileList, [fileList]',
    directives: [File],
    template: `
        <fileItem *ngFor="#file of files; #i = index" [file]="file" (removeFile)="removeFile(file.file, i)"></fileItem>
    `
})

export class FileList {
    public fs;
    constructor() {
        this.fs = FilesStore.getInstance();
        EmitterService.get('uploadedFile').subscribe((index) => {
            this.animatedRemove(this.files[index], index);
        });
    }

    @Output() notifyFilesUpdated = new EventEmitter();

    public get files(){
        return this.fs.files;
    }

    animatedRemove(file, i){
        file.removing=true;
        window.setTimeout(()=>{
            this.removeFile(file.file, i);
        },3000);
    }

    removeFile(file, i) {
        this.fs.removeFiles(file, i);
        this.notifyFilesUpdated.emit(this.fs.files);
    }
}