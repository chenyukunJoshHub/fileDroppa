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
    var FileInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FileInput = (function () {
                function FileInput() {
                    this.fileUploaded = new core_1.EventEmitter();
                }
                FileInput.prototype.handleFiles = function (e) {
                    var _files = [];
                    for (var i = 0, l = e.target.files.length; i < l; i++) {
                        _files.push(e.target.files[i]);
                    }
                    this.fileUploaded.emit(_files);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FileInput.prototype, "fileUploaded", void 0);
                FileInput = __decorate([
                    core_1.Component({
                        selector: 'fileInput',
                        template: "\n        <div>\n            <input type=\"file\" id=\"input\" multiple (change)=\"handleFiles($event)\">\n        </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], FileInput);
                return FileInput;
            })();
            exports_1("FileInput", FileInput);
        }
    }
});
//# sourceMappingURL=FileInput.js.map