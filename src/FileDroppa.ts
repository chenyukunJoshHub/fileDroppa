import {Directive, ElementRef, Renderer, Input, EventEmitter, Output} from 'angular2/core';

@Directive({
    selector: '[fileDroppa]',
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
    private _files:any[] = [];

    constructor(private el:ElementRef, private renderer:Renderer) {}

    /*
     * Directive Input and Output Params
     * */

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
        this.processInputFromDrop(e);
        console.log(this._files);
        this.notifyAboutFiles();
        this.upload(this._url, this._files);
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

    processFilesFromInput(items) {
        return Object.keys(items).reduce((result, key)=>{
            let entry,
                item = items[key];
            if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
                if (entry.isFile) {
                    result.push(item.getAsFile());
                } else if (entry.isDirectory) {
                    this.processDirectory(entry);
                }
            } else if (item.getAsFile != null) {
                if ((item.kind == null) || item.kind === "file") {
                    result.push(item.getAsFile());
                }
            }
            return result;
        },[]);
    }

    processDirectory(directory){
        let dirReader = directory.createReader();
        dirReader.readEntries((entries) => {
            for (var i=0; i<entries.length; i++) {
                this.processFilesFromInput(entries[i]);
            }
        });
    }

    processInputFromDrop(e){
        let items = e.dataTransfer.items,
            _files = [];
        if (items && items.length && (items[0].webkitGetAsEntry != null)) {
            _files = this.processFilesFromInput(items);
        } else if(items && items.length && !items[0].webkitGetAsEntry){
            _files = items;
        }
        this._files = [...this._files, ..._files];
    }

    updateStyles(dragOver:boolean = false) {
        this.renderer.setElementClass(this.el, this._overCls, dragOver);
    }

    notifyAboutFiles(){
        this.fileUploaded && this.fileUploaded.emit(this._files);
    }

    upload(url, files) {
        if(!url){
            throw "URL to post files needs to be provided";
        }
        let data = new FormData();

        files.forEach((file, index) => {
            data.append(`file_${index}`, file[0]);
        });

        window.fetch(url, {
                method: 'post',
                body: data,
            })
            .then((response)=> {
                this._files = [];
                this.notifyAboutFiles();
            })
            .catch((error) => {
                throw `Error happend during files uploading to ${this._url}: ${error}`;
            });
    }


}