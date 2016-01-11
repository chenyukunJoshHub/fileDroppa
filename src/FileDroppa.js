System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FileDroppa;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FileDroppa = (function () {
                function FileDroppa(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                    this._url = null;
                    this._overCls = "defaultOver";
                    this._files = [];
                    this.fileUploaded = new core_1.EventEmitter();
                }
                Object.defineProperty(FileDroppa.prototype, "url", {
                    /*
                     * Directive Input and Output Params
                     * */
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
                    this.processInputFromDrop(e)
                        .then(function (files) {
                        _this._files = _this._files.concat(files);
                        _this.notifyAboutFiles();
                        _this.upload(_this._url, _this._files);
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
                FileDroppa.prototype.processFilesFromInput = function (items) {
                    var _this = this;
                    var newFiles = Object.keys(items).reduce(function (result, key) {
                        var entry, item = items[key];
                        if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
                            if (entry.isFile) {
                                result.push(Promise.resolve(item.getAsFile()));
                            }
                            else if (entry.isDirectory) {
                                result.push(_this.processDirectory(entry));
                            }
                        }
                        else if (item.getAsFile != null) {
                            if ((item.kind == null) || item.kind === "file") {
                                result.push(Promise.resolve(item.getAsFile()));
                            }
                        }
                        else if (item.isFile) {
                            result.push(Promise.resolve(item));
                        }
                        return result;
                    }, []);
                    return Promise.all(newFiles);
                };
                FileDroppa.prototype.processDirectory = function (directory) {
                    var _this = this;
                    var dirReader = directory.createReader(), result = [];
                    var readEntries = function () {
                        return new Promise(function (resolve, reject) {
                            dirReader.readEntries(function (entries) {
                                var pr = [];
                                if (entries.length) {
                                    for (var i = 0; i < entries.length; i++) {
                                        pr.push(_this.processFilesFromInput({ 0: entries[i] }));
                                    }
                                }
                                else {
                                    resolve(null);
                                }
                                result.push(readEntries());
                                Promise.all(pr).then(function (arg) {
                                    resolve(arg);
                                });
                            }, function (error) {
                                reject("Error while reading folder");
                            });
                        });
                    };
                    result.push(readEntries());
                    return Promise.all(result);
                };
                FileDroppa.prototype.processInputFromDrop = function (e) {
                    var _this = this;
                    var items = e.dataTransfer.items, _files = [];
                    if (items && items.length && (items[0].webkitGetAsEntry != null)) {
                        return new Promise(function (resolve, reject) {
                            _this.processFilesFromInput(items).then(function (arg) {
                                _files = [].concat.apply([], arg).reduce(function (result, file) {
                                    return result.concat(file);
                                }, []);
                                resolve(_files);
                            });
                        });
                    }
                    else if (items && items.length && !items[0].webkitGetAsEntry) {
                        return Promise.resolve(items);
                    }
                };
                FileDroppa.prototype.updateStyles = function (dragOver) {
                    if (dragOver === void 0) { dragOver = false; }
                    this.renderer.setElementClass(this.el, this._overCls, dragOver);
                };
                FileDroppa.prototype.notifyAboutFiles = function () {
                    console.log(this._files);
                    this.fileUploaded && this.fileUploaded.emit(this._files);
                };
                FileDroppa.prototype.upload = function (url, files) {
                    if (!url) {
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
                };
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
                        host: {
                            '(drop)': 'drop($event)',
                            '(dragenter)': 'dragenter($event)',
                            '(dragover)': 'dragover($event)',
                            '(dragleave)': 'dragleave($event)'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], FileDroppa);
                return FileDroppa;
            })();
            exports_1("FileDroppa", FileDroppa);
        }
    }
});
//# sourceMappingURL=FileDroppa.js.map