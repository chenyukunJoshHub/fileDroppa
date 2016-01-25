System.register(["angular2/core", "./FileUpload.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, FileUpload_service_1;
    var FilesStore;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (FileUpload_service_1_1) {
                FileUpload_service_1 = FileUpload_service_1_1;
            }],
        execute: function() {
            FilesStore = (function () {
                function FilesStore() {
                    this.WSfiles = new WeakSet();
                    this._iFiles = [];
                    if (!FilesStore.isCreating) {
                        throw new Error("You can't call new in Singleton instances!");
                    }
                }
                FilesStore.getInstance = function () {
                    if (FilesStore.instance == null) {
                        FilesStore.isCreating = true;
                        FilesStore.instance = new FilesStore();
                        FilesStore.isCreating = false;
                    }
                    return FilesStore.instance;
                };
                Object.defineProperty(FilesStore.prototype, "files", {
                    get: function () {
                        return this.iFiles.reduce(function (res, iFile) {
                            res.push(iFile.File);
                            return res;
                        }, []);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FilesStore.prototype, "iFiles", {
                    get: function () {
                        return this._iFiles;
                    },
                    set: function (files) {
                        this._iFiles = files;
                    },
                    enumerable: true,
                    configurable: true
                });
                FilesStore.prototype.addFiles = function (files) {
                    var _this = this;
                    files = files.filter(function (file) {
                        if (!_this.WSfiles.has(file)) {
                            _this.WSfiles.add(file);
                            return true;
                        }
                    }).map(function (file) {
                        var iFile = {
                            File: file,
                            loading: false,
                            percentage: 0,
                            removing: false,
                            loadingSuccessful: false,
                            uploader: null
                        };
                        iFile.uploader = new FileUpload_service_1.FileUpload(iFile);
                        return iFile;
                    });
                    this.iFiles = this.iFiles.concat(files);
                };
                FilesStore.prototype.removeFiles = function (iFile, index) {
                    this.WSfiles.delete(iFile.File);
                    this.iFiles.splice(index, 1);
                };
                FilesStore.prototype.clearStore = function () {
                    var _this = this;
                    this.iFiles.forEach(function (iFile) {
                        _this.WSfiles.delete(iFile.File);
                    });
                    this.iFiles = [];
                };
                FilesStore.isCreating = false;
                FilesStore = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FilesStore);
                return FilesStore;
            })();
            exports_1("FilesStore", FilesStore);
        }
    }
});
