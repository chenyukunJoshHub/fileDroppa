import {Component, Input, EventEmitter, Output, ChangeDetectionStrategy} from 'angular2/core';
import {EmitterService} from '../Services/Emitter.service';
import {File} from './File';
import {FilesStore} from "../Services/fileStore.service";
import {iFile} from "../Services/fileStore.service";

@Component({
    selector: 'fileList, [fileList]',
    directives: [File],
    template: `
        <fileItem *ngFor="#file of files; #i = index" [file]="file" (removeFile)="animatedRemove(file, i)"></fileItem>
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

    public get files():Array<iFile> {
        return this.fs.iFiles;
    }

    animatedRemove(iFile:iFile, i) {
        iFile.removing = true;
        window.setTimeout(()=> {
            this.removeFile(iFile, i);
        }, 3000);
    }

    removeFile(iFile:iFile, i) {
        this.fs.removeFiles(iFile, i);
        this.notifyFilesUpdated.emit(this.fs.files);
    }
}