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
    var FileParser;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FileParser = (function () {
                function FileParser() {
                }
                FileParser.prototype.processFilesFromInput = function (items) {
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
                            var pr = new Promise(function (resolve, reject) {
                                item.file(resolve, reject);
                            });
                            result.push(pr);
                        }
                        return result;
                    }, []);
                    return Promise.all(newFiles).then(this.flattenArrayOfFiles);
                };
                FileParser.prototype.processDirectory = function (directory) {
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
                                Promise.all(pr).then(_this.flattenArrayOfFiles).then(resolve);
                            }, function (error) {
                                reject("Error while reading folder");
                            });
                        });
                    };
                    result.push(readEntries());
                    return Promise.all(result).then(this.flattenArrayOfFiles);
                };
                FileParser.prototype.processInputFromDrop = function (e) {
                    var items = e.dataTransfer.items;
                    if (items && items.length && (items[0].webkitGetAsEntry != null)) {
                        return Promise.resolve(this.processFilesFromInput(items));
                    }
                    else if (items && items.length && !items[0].webkitGetAsEntry) {
                        return Promise.resolve(items);
                    }
                };
                FileParser.prototype.flattenArrayOfFiles = function (arrayOfPromises) {
                    return Promise.resolve(arrayOfPromises.reduce(function (result, file) {
                        return result.concat(file);
                    }, []));
                };
                FileParser = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FileParser);
                return FileParser;
            })();
            exports_1("FileParser", FileParser);
        }
    }
});
//# sourceMappingURL=FileParser.service.js.map