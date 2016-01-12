System.register(['angular2/core', "../Services/FileParser.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, FileParser_service_1;
    var FileDroppa;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (FileParser_service_1_1) {
                FileParser_service_1 = FileParser_service_1_1;
            }],
        execute: function() {
            FileDroppa = (function () {
                function FileDroppa(el, renderer, fileParser) {
                    this.el = el;
                    this.renderer = renderer;
                    this.fileParser = fileParser;
                    this._url = null;
                    this._overCls = "defaultOver";
                    this.fileUploaded = new core_1.EventEmitter();
                }
                Object.defineProperty(FileDroppa.prototype, "fireUpdate", {
                    /*
                     * Directive Input and Output Params
                     * */
                    set: function (updateListener) {
                        updateListener && updateListener.subscribe(this.upload);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FileDroppa.prototype, "url", {
                    set: function (url) {
                        this._url = url || this._url;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FileDroppa.prototype, "overCls", {
                    set: function (overCls) {
                        this._overCls = overCls || this._overCls;
                    },
                    enumerable: true,
                    configurable: true
                });
                /*
                 * Host Event Listeners
                 * */
                FileDroppa.prototype.drop = function (e) {
                    var _this = this;
                    e.preventDefault();
                    if (!e.dataTransfer || !e.dataTransfer.files.length) {
                        return;
                    }
                    this.fileParser.processInputFromDrop(e)
                        .then(function (files) {
                        _this.notifyAboutFiles(files.slice());
                    });
                    this.updateStyles();
                };
                FileDroppa.prototype.dragenter = function (e) {
                    e.preventDefault();
                };
                FileDroppa.prototype.dragover = function (e) {
                    e.preventDefault();
                    this.updateStyles(true);
                };
                FileDroppa.prototype.dragleave = function (e) {
                    e.preventDefault();
                    this.updateStyles();
                };
                /*
                 * Public methods
                 * */
                FileDroppa.prototype.updateStyles = function (dragOver) {
                    if (dragOver === void 0) { dragOver = false; }
                    this.renderer.setElementClass(this.el, this._overCls, dragOver);
                };
                FileDroppa.prototype.notifyAboutFiles = function (files) {
                    this.fileUploaded && this.fileUploaded.emit(files);
                };
                FileDroppa.prototype.upload = function ($event) {
                    if (!this._url) {
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
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', core_1.EventEmitter), 
                    __metadata('design:paramtypes', [core_1.EventEmitter])
                ], FileDroppa.prototype, "fireUpdate", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], FileDroppa.prototype, "url", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], FileDroppa.prototype, "overCls", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FileDroppa.prototype, "fileUploaded", void 0);
                FileDroppa = __decorate([
                    core_1.Directive({
                        selector: '[fileDroppa]',
                        providers: [FileParser_service_1.FileParser],
                        host: {
                            '(drop)': 'drop($event)',
                            '(dragenter)': 'dragenter($event)',
                            '(dragover)': 'dragover($event)',
                            '(dragleave)': 'dragleave($event)'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, FileParser_service_1.FileParser])
                ], FileDroppa);
                return FileDroppa;
            })();
            exports_1("FileDroppa", FileDroppa);
        }
    }
});
//# sourceMappingURL=FileDroppa.js.map