System.register(['angular2/core', '../Pipes/GetSize.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, GetSize_pipe_1;
    var File;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (GetSize_pipe_1_1) {
                GetSize_pipe_1 = GetSize_pipe_1_1;
            }],
        execute: function() {
            File = (function () {
                function File() {
                    this.ext = '';
                    this.previewSrc = '';
                    this.fileName = '';
                    //TODO: workaround - depends on strict values;
                    this.previewHeight = 75;
                    this.removeFile = new core_1.EventEmitter();
                }
                //ngHooks
                File.prototype.ngAfterContentInit = function () {
                    this.file && this.getFileType();
                };
                File.prototype.removeFileListener = function () {
                    this.removeFile && this.removeFile.emit(true);
                };
                File.prototype.getFileType = function () {
                    var _this = this;
                    var imageType = /^image\//, reader;
                    if (!imageType.test(this.file.type)) {
                        var ext = this.file.name.split('.').pop();
                        this.fileName = this.file.name;
                        this.ext = ext.length > 3
                            ? 'file'
                            : "." + ext;
                        return;
                    }
                    reader = new FileReader();
                    reader.addEventListener("load", function () {
                        var img = new Image, result = reader.result;
                        img.onload = function () {
                            var ratio = img.height / img.width, scaledHeight = ratio * _this.previewHeight;
                            _this.previewSrc = result;
                            _this.previewHeight = (scaledHeight < _this.previewHeight)
                                ? _this.previewHeight
                                : scaledHeight;
                        };
                        img.src = result;
                    }, false);
                    if (this.file) {
                        reader.readAsDataURL(this.file);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], File.prototype, "file", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], File.prototype, "index", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], File.prototype, "percentage", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], File.prototype, "uploaded", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], File.prototype, "removeFile", void 0);
                File = __decorate([
                    core_1.Component({
                        selector: 'fileItem',
                        pipes: [GetSize_pipe_1.GetSizePipe],
                        styles: ["\n        .file-container {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            width: 75px;\n            margin: 20px 5px 0 0;\n            transition: opacity 0.5s, margin 0.5s linear;\n            flex-direction: column;\n\n        }\n        \n        .file-container.uploaded {\n            opacity: 0;\n            margin: 0;\n            height: 0;\n            overflow: hidden;\n        }\n        \n        .flex-block {\n            width: 90%;\n            text-align: center;\n            font-size: 0.8em;\n            margin: 2px 0;\n        }\n        \n        .file-remove {\n            cursor: pointer;\n        }\n        \n        .file-name {\n            text-overflow: ellipsis;\n            overflow: hidden;\n        }\n        \n        .file-preview {\n            background: #ccc;\n            border-radius: 2px;\n            width: inherit;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            background-size: cover;\n            color: #fff;\n        }\n        \n         .file-preview-ext {\n            text-transform: uppercase;\n        }\n\n        .file-progress {\n            width: 80%;\n            display: block;\n        }\n\n        \n        button {\n            margin: 0;\n        }   \n    "],
                        template: "\n        <div *ngIf=\"file\" class=\"file-container\" [class.uploaded]=\"uploaded\">\n            <div class=\"flex-block file-preview\" [ngStyle]=\"{'background-image': 'url(' + previewSrc + ')', 'height': previewHeight}\">\n                <div *ngIf=\"ext\" class=\"flex-block file-preview-ext \">{{ext}}</div>\n                <div *ngIf=\"!previewSrc\" class=\"flex-block file-name\">{{fileName}}</div>\n                <progress [value]=\"percentage\" max=\"100\" class=\"file-progress\"></progress>\n            </div>\n            <div class=\" file-remove\" (click)=\"removeFileListener()\"><button>Remove</button></div>\n            <div class=\"flex-block\">{{file.size | getSize }}</div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], File);
                return File;
            })();
            exports_1("File", File);
        }
    }
});
