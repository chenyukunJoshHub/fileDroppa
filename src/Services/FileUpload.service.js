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
                function FileUpload() {
                    this.onProgress = new core_1.EventEmitter();
                    this.onSuccess = new core_1.EventEmitter();
                    this.onError = new core_1.EventEmitter();
                }
                FileUpload.prototype.uploadFile = function (file) {
                    var _this = this;
                    var that = this, xhr = new XMLHttpRequest(), formData = new FormData();
                    formData.append("" + file.name, file);
                    xhr.upload.onprogress = function (event) {
                        var progress = (event.loaded * 100) / event.total;
                        _this.onProgress.emit(progress | 0);
                    };
                    xhr.onload = xhr.onerror = function () {
                        if (this.status == 200) {
                            console.log("success");
                            that.onSuccess.emit(true);
                        }
                        else {
                            console.log("error " + this.status);
                            that.onError.emit(true);
                        }
                    };
                    //TODO: move url to config
                    xhr.open("POST", "http://localhost:9090/upload", true);
                    xhr.send(formData);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FileUpload.prototype, "onProgress", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FileUpload.prototype, "onSuccess", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FileUpload.prototype, "onError", void 0);
                FileUpload = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FileUpload);
                return FileUpload;
            })();
            exports_1("FileUpload", FileUpload);
        }
    }
});
//# sourceMappingURL=FileUpload.service.js.map