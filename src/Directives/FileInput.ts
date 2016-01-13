import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector:'fileInput',
    template: `
        <div>
            <input type="file" id="input" multiple (change)="handleFiles($event)">
        </div>
    `,
})

export class FileInput {
    @Output() fileUploaded = new EventEmitter();
    handleFiles(e){
        let _files = [];
        for(let i=0,l=e.target.files.length;i<l;i++){
            _files.push(e.target.files[i]);
        }
        this.fileUploaded.emit(_files);
    }
}