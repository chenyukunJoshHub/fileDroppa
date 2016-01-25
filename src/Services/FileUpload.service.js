System.register(["angular2/core"], function(exports_1) {
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
    var FileUpload;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FileUpload = (function () {
                function FileUpload(iFile) {
                    this.iFile = iFile;
                    this.zone = new core_1.NgZone({ enableLongStackTrace: false });
                    FileUpload.autoUpload && this.uploadFile();
                }
                FileUpload.prototype.abortUploading = function () {
                    this.xhr.loading && this.xhr.abort();
                };
                FileUpload.prototype.uploadFile = function () {
                    var _this = this;
                    if (!FileUpload.url) {
                        throw "url to upload needs to be provided";
                    }
                    if (this.iFile.loading) {
                        throw "Already under loading";
                    }
                    var that = this, formData = new FormData();
                    this.xhr = new XMLHttpRequest();
                    formData.append("" + this.iFile.File.name, this.iFile.File);
                    this.xhr.upload.onprogress = function (event) {
                        var progress = (event.loaded * 100) / event.total | 0;
                        _this.zone.run(function () {
                            _this.iFile.percentage = progress;
                        });
                    };
                    var pr = new Promise(function (resolve, reject) {
                        _this.xhr.onload = _this.xhr.onerror = function () {
                            var _this = this;
                            that.zone.run(function () {
                                if (_this["status"] == 200) {
                                    that.iFile.loading = false;
                                    that.iFile.loadingSuccessful = true;
                                    resolve();
                                }
                                else {
                                    that.iFile.loading = false;
                                    that.iFile.loadingSuccessful = false;
                                    reject();
                                }
                            });
                        };
                    });
                    this.iFile.loading = true;
                    this.xhr.open("POST", FileUpload.url, true);
                    this.xhr.send(formData);
                    return pr;
                };
                FileUpload.autoUpload = false;
                FileUpload = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [Object])
                ], FileUpload);
                return FileUpload;
            })();
            exports_1("FileUpload", FileUpload);
        }
    }
});
