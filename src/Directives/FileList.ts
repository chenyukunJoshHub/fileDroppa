import {Component, Input, EventEmitter, Output, ChangeDetectionStrategy} from 'angular2/core';
import {File} from './File';
import {FilesStore} from "../Services/FileStore.service";
import {iFile} from "../Services/fileStore.service";
import {FileUpload} from "../Services/FileUpload.service";

@Component({
    selector: 'fileList, [fileList]',
    directives: [File],
    styles: [`
        .file-list {
            width: 400px;
            margin-bottom: 25px;
            display: flex;
            flex-flow: wrap;
            justify-content: flex-start;
         }
    `],
    template: `
    <div class="file-list">
        <fileItem *ngFor="#file of files; #i = index" 
            [file]="file.File" 
            [index]="i" 
            [percentage]="file.percentage"
            [uploaded]="file.loadingSuccessful"
            (removeFile)="removeFile(file, i)">
        </fileItem>
    </div>
    `
})

export class FileList {
    public fs;

    constructor() {
        this.fs = FilesStore.getInstance();
    }

    @Input() set uploadFiles(uploadFilesEmitter) {
        uploadFilesEmitter.subscribe(()=> {
            this.files.forEach((iFile:iFile, i:number)=> {
                iFile.uploader.uploadFile().then(()=>{
                    this.removeFile(iFile, i);
                }).catch(()=>{

                });
            })
        });
    }

    @Input() set removeAllFiles(removeAllFilesEmitter) {
        removeAllFilesEmitter.subscribe(()=> {
            this.fs.clearStore();
            this.notifyFilesUpdated.emit(this.fs.files);
        })
    }

    @Input() set url(url) {
        FileUpload.url = url;
    }

    @Input() set autoUpload(autoUpload) {
        FileUpload.autoUpload = autoUpload;
    }

    @Output() notifyFilesUpdated = new EventEmitter();

    public get files():Array<iFile> {
        return this.fs.iFiles;
    }

    removeFile(iFile:iFile, i) {
        this.fs.removeFiles(iFile, i);
        this.notifyFilesUpdated.emit(this.fs.files);
    }
}