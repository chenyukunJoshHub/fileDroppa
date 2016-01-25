System.register(['angular2/core', './FileDroppa', './FileList'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, FileDroppa_1, FileList_1;
    var FileDropZone;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                    this.uploadFiles = new core_1.EventEmitter();
                    this.removeAllFiles = new core_1.EventEmitter();
                    this._showButtons = false;
                    this.filesUpdated = new core_1.EventEmitter();
                }
                ;
                Object.defineProperty(FileDropZone.prototype, "config", {
                    get: function () {
                        return this._config;
                    },
                    set: function (config) {
                        this._config = config ? Object.assign(config, this._config) : this._config;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FileDropZone.prototype, "showButtons", {
                    get: function () {
                        return this._showButtons && !this.config.autoUpload;
                    },
                    set: function (flag) {
                        this._showButtons = flag;
                    },
                    enumerable: true,
                    configurable: true
                });
                FileDropZone.prototype.upload = function () {
                    this.uploadFiles.emit(true);
                };
                FileDropZone.prototype.remove = function () {
                    this.removeAllFiles.emit(true);
                };
                FileDropZone.prototype.notifyFilesUpdated = function (files) {
                    this.filesUpdated.emit(files);
                    this.showButtons = !!files.length;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], FileDropZone.prototype, "config", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], FileDropZone.prototype, "filesUpdated", void 0);
                FileDropZone = __decorate([
                    core_1.Component({
                        selector: 'fileDropZone',
                        directives: [FileDroppa_1.FileDroppa, FileList_1.FileList],
                        styles: ["\n        .fileDroppa {\n            border: 3px dashed #DDD;\n            border-radius:10px;\n            padding:10px;\n            width:400px;\n            height:200px;\n            color:#CCC;\n            text-align:center;\n            display:table-cell;\n            vertical-align:middle;\n            cursor:pointer;\n        }\n    "],
                        template: "\n            <div fileDroppa [class]=\"config.customClass\"\n                (notifyFilesUpdated)=\"notifyFilesUpdated($event)\"\n                [overCls]=\"config.overCls\">\n                Drop files here or click to select\n            </div>\n            <br/>\n            <fileList\n                [url]=\"config.uploadUrl\"\n                [autoUpload]=\"config.autoUpload\"\n                (notifyFilesUpdated)=\"notifyFilesUpdated($event)\"\n                [uploadFiles]=\"uploadFiles\"\n                [removeAllFiles]=\"removeAllFiles\">\n            </fileList>\n            <div *ngIf=\"showButtons\">\n                <button (click)=\"upload($event)\">Upload All Files</button>\n                <button (click)=\"remove($event)\">Remove All Files</button>\n            </div>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FileDropZone);
                return FileDropZone;
            })();
            exports_1("FileDropZone", FileDropZone);
        }
    }
});
