import {Component, Input, Output, EventEmitter, NgZone,} from 'angular2/core';

@Component({
    selector: 'fileItem',
    styles: [`
        .file-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 600px;
            margin-top: 20px;
            transition: opacity 1s, margin 1s linear;
        }
        
        .file-container.uploaded {
            opacity: 0;
            margin: 0;
            height: 0;
            overflow: hidden;
        }
        
        .flex-block {
            width: 18%;
            margin-right: 2%;
        }
        
        .file-remove {
            cursor: pointer;
        }
        
        .file-name {
            text-overflow: ellipsis;
            overflow: hidden;
        }
        
        .file-preview {
            background: #ccc;
            border-radius: 2px;
            width: 75px;
            text-align: center;
            line-height: 75px;
        }
        
        .file-preview-img {
            border-radius:inherit;
            width: inherit;
            height: inherit;
        }
        
         .file-preview-ext {
            color: #fff;
            text-transform: uppercase;
            padding: 10px;
        }
        
        
        button {
            margin: 0;
        }   
    `],
    template: `
        <div *ngIf="file.File" class="file-container" [class.uploaded]="file.loadingSuccessful">
            <div class="flex-block file-preview">
                <span *ngIf="ext" class="file-preview-ext">{{ext}}</span>
                <img *ngIf="previewSrc" src="{{previewSrc}}" class="file-preview-img"/>
            </div>
            <div class="flex-block file-name">{{file.File.name}}</div>
            <div class="flex-block">{{getSize()}}</div>
            <progress [value]="file.percentage" max="100" class="flex-block"></progress>
            <div class="flex-block file-remove" (click)="removeFileListener()"><button>Remove</button></div>
        </div>
    `
})

export class File {

    public ext:string = '';
    public previewSrc:string = '';

    constructor() {}

    //ngHooks
    ngAfterContentInit() {
        this.getFileType();
    }

    @Input() file;
    @Input() index;

    @Output() removeFile = new EventEmitter();
    @Output() successUpload = new EventEmitter();


    removeFileListener() {
        this.removeFile && this.removeFile.emit(true);
    }

    getFileType() {
        let imageType = /^image\//,
            reader;

        if (!imageType.test(this.file.File.type)) {
            let ext = this.file.File.name.split('.').pop();

            this.ext = ext.length > 3
                ? 'file'
                : `.${ext}`;

            return;
        }

        reader = new FileReader();

        reader.addEventListener("load", () => {
            this.previewSrc = reader.result;
        }, false);

        if (this.file.File) {
            reader.readAsDataURL(this.file.File);
        }
    }

    getSize() {
        let bytes = this.file.size,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            k = 1000,
            i = Math.floor(Math.log(bytes) / Math.log(k));

        if (bytes == 0) {
            return '0 Byte';
        }

        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
    }

}
