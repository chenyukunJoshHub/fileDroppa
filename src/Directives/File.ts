import {Component, Input, Output, EventEmitter, NgZone} from 'angular2/core';
import {EmitterService} from '../Services/Emitter.service';
import {FileUpload} from '../Services/FileUpload.service';

@Component({
    selector: 'fileItem',
    providers: [FileUpload],
    styles: [`
        .file-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 600px;
            margin-top: 20px;
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
        <div *ngIf="file" class="file-container">
            <div class="flex-block file-preview">
                <span *ngIf="ext" class="file-preview-ext">{{ext}}</span>
                <img *ngIf="previewSrc" src="{{previewSrc}}" class="file-preview-img"/>
            </div>
            <div class="flex-block file-name">{{file.name}}</div>
            <div class="flex-block">{{file.size}} bytes</div>
            <progress [value]="progress" max="100" class="flex-block"></progress>
            <div class="flex-block file-remove" (click)=removeFileListener(index)><button>Remove</button></div>
        </div>
    `,
    inputs: ['file', 'index']
})

export class File {
    private _uploaded:Boolean = false;

    public file;
    public index;
    public ext:string = '';
    public previewSrc:string = '';
    public progress:number = 0;
    zone:NgZone;

    constructor(private fileUpload:FileUpload) {
        this.init(fileUpload);
    }

    //Hook
    ngAfterContentInit() {
        this.getFileType();
    }

    @Output() removeFile = new EventEmitter();

    init(fileUpload) {
        this.zone = new NgZone({enableLongStackTrace: false});
        EmitterService.get('doUpload').subscribe(data => {
            //prevent from multiple upload;
            !this._uploaded && fileUpload.uploadFile(this.file);
        });

        fileUpload.onProgress.subscribe((value)=> {
            this.zone.run(()=> {
                this.progress = value
            });
        });

        fileUpload.onSuccess.subscribe(() => {
            this._uploaded = true
        });
    }

    removeFileListener(index) {
        this.removeFile && this.removeFile.emit(index);
    }

    getFileType() {
        let imageType = /^image\//,
            reader;

        if (!imageType.test(this.file.type)) {
            let ext = this.file.name.split('.').pop();

            this.ext = ext.length > 3
                ? 'file'
                : `.${ext}`;

            return;
        }

        reader = new FileReader();

        reader.addEventListener("load", () => {
            this.previewSrc = reader.result;
        }, false);

        if (this.file) {
            reader.readAsDataURL(this.file);
        }
    }

}
