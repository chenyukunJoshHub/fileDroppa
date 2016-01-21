System.register(['angular2/core', '../Services/Emitter.service', '../Services/FileUpload.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Emitter_service_1, FileUpload_service_1;
    var File;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Emitter_service_1_1) {
                Emitter_service_1 = Emitter_service_1_1;
            },
            function (FileUpload_service_1_1) {
                FileUpload_service_1 = FileUpload_service_1_1;
            }],
        execute: function() {
            File = (function () {
                function File(fileUpload) {
                    this.fileUpload = fileUpload;
                    this._uploaded = false;
                    this.ext = '';
                    this.previewSrc = '';
                    this.progress = 0;
                    this.removeFile = new core_1.EventEmitter();
                    this.init(fileUpload);
                }
                //Hook
                File.prototype.ngAfterContentInit = function () {
                    this.getFileType();
                };
                File.prototype.init = function (fileUpload) {
                    var _this = this;
                    this.zone = new core_1.NgZone({ enableLongStackTrace: false });
                    Emitter_service_1.EmitterService.get('doUpload').subscribe(function (data) {
                        //prevent from multiple upload;
                        !_this._uploaded && fileUpload.uploadFile(_this.file);
                    });
                    fileUpload.onProgress.subscribe(function (value) {
                        _this.zone.run(function () {
                            _this.progress = value;
                        });
                    });
                    fileUpload.onSuccess.subscribe(function () {
                        _this._uploaded = true;
                    });
                };
                File.prototype.removeFileListener = function (index) {
                    this.removeFile && this.removeFile.emit(index);
                };
                File.prototype.getFileType = function () {
                    var _this = this;
                    var imageType = /^image\//, reader;
                    if (!imageType.test(this.file.type)) {
                        var ext = this.file.name.split('.').pop();
                        this.ext = ext.length > 3
                            ? 'file'
                            : "." + ext;
                        return;
                    }
                    reader = new FileReader();
                    reader.addEventListener("load", function () {
                        _this.previewSrc = reader.result;
                    }, false);
                    if (this.file) {
                        reader.readAsDataURL(this.file);
                    }
                };
                File.prototype.getSize = function () {
                    var bytes = this.file.size, sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], k = 1000, i = Math.floor(Math.log(bytes) / Math.log(k));
                    if (bytes == 0) {
                        return '0 Byte';
                    }
                    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], File.prototype, "removeFile", void 0);
                File = __decorate([
                    core_1.Component({
                        selector: 'fileItem',
                        providers: [FileUpload_service_1.FileUpload],
                        styles: ["\n        .file-container {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            max-width: 600px;\n            margin-top: 20px;\n        }\n        .flex-block {\n            width: 18%;\n            margin-right: 2%;\n        }\n        \n        .file-remove {\n            cursor: pointer;\n        }\n        \n        .file-name {\n            text-overflow: ellipsis;\n            overflow: hidden;\n        }\n        \n        .file-preview {\n            background: #ccc;\n            border-radius: 2px;\n            width: 75px;\n            text-align: center;\n            line-height: 75px;\n        }\n        \n        .file-preview-img {\n            border-radius:inherit;\n            width: inherit;\n            height: inherit;\n        }\n        \n         .file-preview-ext {\n            color: #fff;\n            text-transform: uppercase;\n            padding: 10px;\n        }\n        \n        \n        button {\n            margin: 0;\n        }   \n    "],
                        template: "\n        <div *ngIf=\"file\" class=\"file-container\">\n            <div class=\"flex-block file-preview\">\n                <span *ngIf=\"ext\" class=\"file-preview-ext\">{{ext}}</span>\n                <img *ngIf=\"previewSrc\" src=\"{{previewSrc}}\" class=\"file-preview-img\"/>\n            </div>\n            <div class=\"flex-block file-name\">{{file.name}}</div>\n            <div class=\"flex-block\">{{getSize()}}</div>\n            <progress [value]=\"progress\" max=\"100\" class=\"flex-block\"></progress>\n            <div class=\"flex-block file-remove\" (click)=removeFileListener(index)><button>Remove</button></div>\n        </div>\n    ",
                        inputs: ['file', 'index']
                    }), 
                    __metadata('design:paramtypes', [FileUpload_service_1.FileUpload])
                ], File);
                return File;
            })();
            exports_1("File", File);
        }
    }
});
//# sourceMappingURL=File.js.map