import {Component, Input, EventEmitter, Output, ChangeDetectionStrategy} from 'angular2/core';
import {File} from './File';
import {FilesStore} from "../Services/FileStore.service";
import {FileUpload} from "../Services/FileUpload.service";
import {iFile} from "../Services/FileWrapper.service";

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
    public filesStore: FilesStore;

    @Input() set fs(fs:FilesStore) {
        this.filesStore = fs;
    }

    @Input() set uploadFiles(uploadFilesEmitter) {
        uploadFilesEmitter.subscribe(()=> {
            this.files.forEach((iFile:iFile, i:number)=> {
                iFile.uploader.uploadFile().then(()=>{
                    this.notifyFilesUpdated.emit(this.filesStore.files);
                });
            })
        });
    }

    @Input() set removeAllFiles(removeAllFilesEmitter) {
        removeAllFilesEmitter.subscribe(()=> {
            this.onRemoveAllFiles();
        })
    }

    @Output() notifyFilesUpdated = new EventEmitter();

    public get files():Array<iFile> {
        return this.filesStore.iFiles;
    }

    onRemoveAllFiles() {
        this.filesStore.iFiles.forEach((iFile)=> {
            iFile.uploader.abortUploading();
        });
        this.filesStore.clearStore();
        this.notifyFilesUpdated.emit(this.filesStore.files);
    }

    removeFile(iFile:iFile, i) {
        iFile.uploader.abortUploading();
        this.filesStore.removeFiles(iFile);
        this.notifyFilesUpdated.emit(this.filesStore.files);
    }
}