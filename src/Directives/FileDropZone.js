System.register(['angular2/core', '../Services/Emitter.service', './FileDroppa', './FileList'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Emitter_service_1, FileDroppa_1, FileList_1;
    var FileDropZone;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Emitter_service_1_1) {
                Emitter_service_1 = Emitter_service_1_1;
            },
            function (FileDroppa_1_1) {
                FileDroppa_1 = FileDroppa_1_1;
            },
            function (FileList_1_1) {
                FileList_1 = FileList_1_1;
            }],
        execute: function() {
            FileDropZone = (function () {
                function FileDropZone() {
                    this._config = {};
                    this._files = [];
                    this.startUpload = new core_1.EventEmitter();
                    this.fileUploaded = new core_1.EventEmitter();
                }
                ;
                Object.defineProperty(FileDropZone.prototype, "config", {
                    get: function () {
                        return this._config;
                    },
                    set: function (config) {
                        this._config = config ? Object.assign(config, this._config) : this._config;
                        console.log('this._config', this._config);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FileDropZone.prototype, "files", {
                    get: function () {
                        return this._files;
                    },
                    set: function (files) {
                        this._files = files;
                    },
                    enumerable: true,
                    configurable: true
                });
                FileDropZone.prototype.notifyAboutFileChanges = function () {
                    this.fileUploaded && this.fileUploaded.emit(this.files);
                };
                FileDropZone.prototype.updateFileList = function (files, type) {
                    switch (type) {
                        case 'added':
                            this.files = (this.files.length)
                                ? this.files.concat(files)
                                : files;
                            break;
                        case 'removed':
                            this.files = files;
                            break;
                        default:
                            this.files = [];
                            break;
                    }
                    this.notifyAboutFileChanges();
                };
                FileDropZone.prototype.uploadFileList = function () {
                    Emitter_service_1.EmitterService.get('doUpload').emit(true);
                };
                FileDropZone.prototype.clearFileList = function () {
                    this.files = [];
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], FileDropZone.prototype, "config", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FileDropZone.prototype, "fileUploaded", void 0);
                FileDropZone = __decorate([
                    core_1.Component({
                        selector: 'fileDropZone',
                        directives: [FileDroppa_1.FileDroppa, FileList_1.FileList],
                        providers: [Emitter_service_1.EmitterService],
                        styles: ["\n        .fileDroppa {\n            border: 3px dashed #DDD;\n            border-radius:10px;\n            padding:10px;\n            width:300px;\n            height:150px;\n            color:#CCC;\n            text-align:center;\n            display:table-cell;\n            vertical-align:middle;\n            cursor:pointer;\n        }\n    "],
                        template: "\n            <div fileDroppa [class]=\"config.customClass\"\n                (fileUploaded)=\"updateFileList($event, 'added')\"\n                [overCls]=\"config.overCls\">\n                Drop files here or click to select\n            </div>\n            <br/>\n            <div *ngIf=\"files.length\">\n                <fileList [files]=\"files\" (fileRemoved)=\"updateFileList($event, 'removed')\"></fileList>\n                <button (click)=\"uploadFileList()\">Upload All Files</button>\n                <button (click)=\"clearFileList()\">Remove All Files</button>\n            </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FileDropZone);
                return FileDropZone;
            })();
            exports_1("FileDropZone", FileDropZone);
        }
    }
});
//# sourceMappingURL=FileDropZone.js.map