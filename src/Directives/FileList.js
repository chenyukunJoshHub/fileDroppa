System.register(['angular2/core', './File'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, File_1;
    var FileList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (File_1_1) {
                File_1 = File_1_1;
            }],
        execute: function() {
            FileList = (function () {
                function FileList() {
                    this._files = [];
                    this.fileRemoved = new core_1.EventEmitter();
                }
                Object.defineProperty(FileList.prototype, "files", {
                    get: function () {
                        return this._files;
                    },
                    set: function (files) {
                        this._files = files || this._files;
                    },
                    enumerable: true,
                    configurable: true
                });
                FileList.prototype.removeFile = function (index) {
                    this._files.splice(index, 1);
                    this.fileRemoved.emit(this._files);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array), 
                    __metadata('design:paramtypes', [Array])
                ], FileList.prototype, "files", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FileList.prototype, "fileRemoved", void 0);
                FileList = __decorate([
                    core_1.Component({
                        selector: 'fileList, [fileList]',
                        directives: [File_1.File],
                        template: "\n        <fileItem *ngFor=\"#file of files; #i = index\" [file]=\"file\" [index]=\"i\" (removeFile)=removeFile($event)></fileItem>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FileList);
                return FileList;
            })();
            exports_1("FileList", FileList);
        }
    }
});
//# sourceMappingURL=FileList.js.map