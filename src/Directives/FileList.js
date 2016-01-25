System.register(['angular2/core', './File', "../Services/FileStore.service", "../Services/FileUpload.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, File_1, FileStore_service_1, FileUpload_service_1;
    var FileList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (File_1_1) {
                File_1 = File_1_1;
            },
            function (FileStore_service_1_1) {
                FileStore_service_1 = FileStore_service_1_1;
            },
            function (FileUpload_service_1_1) {
                FileUpload_service_1 = FileUpload_service_1_1;
            }],
        execute: function() {
            FileList = (function () {
                function FileList() {
                    this.notifyFilesUpdated = new core_1.EventEmitter();
                    this.fs = FileStore_service_1.FilesStore.getInstance();
                }
                Object.defineProperty(FileList.prototype, "uploadFiles", {
                    set: function (uploadFilesEmitter) {
                        var _this = this;
                        uploadFilesEmitter.subscribe(function () {
                            _this.files.forEach(function (iFile, i) {
                                iFile.uploader.uploadFile().then(function () {
                                    _this.removeFile(iFile, i);
                                }).catch(function () {
                                });
                            });
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FileList.prototype, "removeAllFiles", {
                    set: function (removeAllFilesEmitter) {
                        var _this = this;
                        removeAllFilesEmitter.subscribe(function () {
                            _this.onRemoveAllFiles();
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FileList.prototype, "url", {
                    set: function (url) {
                        FileUpload_service_1.FileUpload.url = url;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FileList.prototype, "autoUpload", {
                    set: function (autoUpload) {
                        FileUpload_service_1.FileUpload.autoUpload = autoUpload;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FileList.prototype, "files", {
                    get: function () {
                        return this.fs.iFiles;
                    },
                    enumerable: true,
                    configurable: true
                });
                FileList.prototype.onRemoveAllFiles = function () {
                    this.fs.iFiles.forEach(function (iFile) {
                        iFile.uploader.abortUploading();
                    });
                    this.fs.clearStore();
                    this.notifyFilesUpdated.emit(this.fs.files);
                };
                FileList.prototype.removeFile = function (iFile, i) {
                    iFile.uploader.abortUploading();
                    this.fs.removeFiles(iFile, i);
                    this.notifyFilesUpdated.emit(this.fs.files);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], FileList.prototype, "uploadFiles", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], FileList.prototype, "removeAllFiles", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], FileList.prototype, "url", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], FileList.prototype, "autoUpload", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FileList.prototype, "notifyFilesUpdated", void 0);
                FileList = __decorate([
                    core_1.Component({
                        selector: 'fileList, [fileList]',
                        directives: [File_1.File],
                        styles: ["\n        .file-list {\n            width: 400px;\n            margin-bottom: 25px;\n            display: flex;\n            flex-flow: wrap;\n            justify-content: flex-start;\n         }\n    "],
                        template: "\n    <div class=\"file-list\">\n        <fileItem *ngFor=\"#file of files; #i = index\" \n            [file]=\"file.File\" \n            [index]=\"i\" \n            [percentage]=\"file.percentage\"\n            [uploaded]=\"file.loadingSuccessful\"\n            (removeFile)=\"removeFile(file, i)\">\n        </fileItem>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FileList);
                return FileList;
            })();
            exports_1("FileList", FileList);
        }
    }
});
