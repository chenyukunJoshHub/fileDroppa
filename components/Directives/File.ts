import {Component, Input, Output, EventEmitter, NgZone} from 'angular2/core';
import {NgStyle} from 'angular2/common';
import {GetSizePipe} from '../Pipes/GetSize.pipe';

@Component({
    selector: 'fileItem',
    pipes: [GetSizePipe],
    styles: [`
        .file-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 75px;
            margin: 20px 5px 0 0;
            transition: opacity 0.5s, margin 0.5s linear;
            flex-direction: column;

        }
        
        .file-container.uploaded {
            opacity: 0;
            margin: 0;
            height: 0;
            overflow: hidden;
        }
        
        .flex-block {
            width: 90%;
            text-align: center;
            font-size: 0.8em;
            margin: 2px 0;
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
            width: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background-size: cover;
            color: #fff;
        }
        
         .file-preview-ext {
            text-transform: uppercase;
        }

        .file-progress {
            width: 80%;
            display: block;
        }

        
        button {
            margin: 0;
        }   
    `],
    template: `
        <div *ngIf="file" class="file-container" [class.uploaded]="uploaded">
            <div class="flex-block file-preview" [ngStyle]="{'background-image': 'url(' + previewSrc + ')', 'height': previewHeight + 'px'}">
                <div *ngIf="ext" class="flex-block file-preview-ext ">{{ext}}</div>
                <div *ngIf="!previewSrc" class="flex-block file-name">{{fileName}}</div>
                <progress [value]="percentage" max="100" class="file-progress"></progress>
            </div>
            <div class=" file-remove" (click)="removeFileListener()"><button>Remove</button></div>
            <div class="flex-block">{{file.size | getSize }}</div>
        </div>
    `
})

export class File {
    public ext:string = '';
    public previewSrc:string = '';
    public fileName:string = '';
    //TODO: workaround - depends on strict values;
    public previewHeight:number = 75;


    //ngHooks
    ngAfterContentInit() {
        this.file && this.getFileType();
    }

    @Input() file;
    @Input() index;
    @Input() percentage;
    @Input() uploaded;

    @Output() removeFile = new EventEmitter();


    removeFileListener() {
        this.removeFile && this.removeFile.emit(true);
    }

    getFileType() {
        let imageType = /^image\//,
            reader;

        if (!imageType.test(this.file.type)) {
            let ext = this.file.name.split('.').pop();

            this.fileName = this.file.name;
            this.ext = ext.length > 3
                ? 'file'
                : `.${ext}`;
            return;
        }

        reader = new FileReader();

        reader.addEventListener("load", () => {
            let img = new Image,
                result = reader.result;

            img.onload = () => {
                let ratio = img.height / img.width,
                    scaledHeight = ratio * this.previewHeight;

                this.previewSrc = result;
                this.previewHeight = (scaledHeight < this.previewHeight)
                    ? this.previewHeight
                    : scaledHeight;
            };

            img.src = result;
        }, false);

        if (this.file) {
            reader.readAsDataURL(this.file);
        }
    }
}
