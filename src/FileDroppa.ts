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
        this.processInputFromDrop(e)
            .then((files)=> {
                this._files = [...this._files, ...files];
                this.notifyAboutFiles();
                this.upload(this._url, this._files);
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

    processFilesFromInput(items) {
        let newFiles = Object.keys(items).reduce((result, key)=> {
            let entry,
                item = items[key];
            if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
                if (entry.isFile) {
                    result.push(Promise.resolve(item.getAsFile()));
                } else if (entry.isDirectory) {
                    result.push(this.processDirectory(entry));
                }
            } else if (item.getAsFile != null) {
                if ((item.kind == null) || item.kind === "file") {
                    result.push(Promise.resolve(item.getAsFile()));
                }
            } else if (item.isFile) {
                let pr = new Promise((resolve, reject)=>{
                   item.file(resolve, reject);
                });
                result.push(pr);
            }
            return result;
        }, []);

        return Promise.all(newFiles).then(this.flattenArrayOfFiles)
    }

    processDirectory(directory) {
        let dirReader = directory.createReader(),
            result = [];

        var readEntries = () => {
            return new Promise((resolve, reject)=> {
                dirReader.readEntries((entries) => {
                    let pr = [];

                    if (entries.length) {
                        for (var i = 0; i < entries.length; i++) {
                            pr.push(this.processFilesFromInput({0: entries[i]}));
                        }
                    } else {
                        resolve(null);
                    }
                    result.push(readEntries());
                    Promise.all(pr).then(this.flattenArrayOfFiles).then(resolve);
                }, (error)=> {
                    reject("Error while reading folder");
                });
            })
        };

        result.push(readEntries());
        return Promise.all(result).then(this.flattenArrayOfFiles);
    }

    processInputFromDrop(e) {
        let items = e.dataTransfer.items;

        if (items && items.length && (items[0].webkitGetAsEntry != null)) {
            return Promise.resolve(this.processFilesFromInput(items));
        } else if (items && items.length && !items[0].webkitGetAsEntry) {
            return Promise.resolve(items)
        }
    }

    flattenArrayOfFiles(arrayOfPromises){
        return Promise.resolve(arrayOfPromises.reduce((result, file) => {
            return [...result, ...file];
        }, []))
    }

    updateStyles(dragOver:boolean = false) {
        this.renderer.setElementClass(this.el, this._overCls, dragOver);
    }

    notifyAboutFiles() {
        this.fileUploaded && this.fileUploaded.emit(this._files);
    }

    upload(url, files) {
        if (!url) {
            //throw "URL to post files needs to be provided";
        }

        //TODO: Figure out how upload FileEntry and File object's types

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