import {Directive, ElementRef, Renderer, Input, EventEmitter, Output} from 'angular2/core';
import {FileParser} from "../Services/FileParser.service";

@Directive({
    selector: '[fileDroppa]',
    providers:[FileParser],
    host: {
        '(drop)': 'drop($event)',
        '(dragenter)': 'dragenter($event)',
        '(dragover)': 'dragover($event)',
        '(dragleave)': 'dragleave($event)'
    }
})

export class FileDroppa {
    private _url:string = null;
    private _overCls:string = "defaultOver";

    constructor(private el:ElementRef, private renderer:Renderer, private fileParser: FileParser) {}

    /*
     * Directive Input and Output Params
     * */

    @Input() set fireUpdate(updateListener:EventEmitter<any>) {
        updateListener && updateListener.subscribe(this.upload);
    }

    @Input() set url(url:string) {
        this._url = url || this._url;
    }

    @Input() set overCls(overCls:string) {
        this._overCls = overCls || this._overCls;
    }

    @Output() fileUploaded = new EventEmitter();

    /*
     * Host Event Listeners
     * */

    drop(e) {
        e.preventDefault();
        if (!e.dataTransfer || !e.dataTransfer.files.length) {
            return;
        }
        this.fileParser.processInputFromDrop(e)
            .then((files)=> {
                this.notifyAboutFiles([...files]);
            });
        this.updateStyles();
    }

    dragenter(e) {
        e.preventDefault()
    }

    dragover(e) {
        e.preventDefault();
        this.updateStyles(true);
    }

    dragleave(e) {
        e.preventDefault();
        this.updateStyles();
    }

    /*
     * Public methods
     * */


    updateStyles(dragOver:boolean = false) {
        this.renderer.setElementClass(this.el, this._overCls, dragOver);
    }

    notifyAboutFiles(files) {
        this.fileUploaded && this.fileUploaded.emit(files);
    }

    upload($event) {
        if (!this._url) {
            //throw "URL to post files needs to be provided";
        }

        console.log("upload!!!");

        //let data = new FormData();
        //
        //files.forEach((file, index) => {
        //    data.append(`file_${index}`, file[0]);
        //});
        //
        //window.fetch(url, {
        //        method: 'post',
        //        body: data,
        //    })
        //    .then((response)=> {
        //        this._files = [];
        //        this.notifyAboutFiles();
        //    })
        //    .catch((error) => {
        //        throw `Error happend during files uploading to ${this._url}: ${error}`;
        //    });
    }


}