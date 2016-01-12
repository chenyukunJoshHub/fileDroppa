export class FileParser {
    processFilesFromInput(items) {
        let newFiles = Object.keys(items).reduce((result, key)=> {
            let entry,
                item = items[key];
            if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
                if (entry.isFile) {
                    result.push(Promise.resolve(item.getAsFile()));
                } else if (entry.isDirectory) {
                    result.push(this.processDirectory(entry));
                }
            } else if (item.getAsFile != null) {
                if ((item.kind == null) || item.kind === "file") {
                    result.push(Promise.resolve(item.getAsFile()));
                }
            } else if (item.isFile) {
                let pr = new Promise((resolve, reject)=>{
                    item.file(resolve, reject);
                });
                result.push(pr);
            }
            return result;
        }, []);

        return Promise.all(newFiles).then(this.flattenArrayOfFiles)
    }

    processDirectory(directory) {
        let dirReader = directory.createReader(),
            result = [];

        var readEntries = () => {
            return new Promise((resolve, reject)=> {
                dirReader.readEntries((entries) => {
                    let pr = [];

                    if (entries.length) {
                        for (var i = 0; i < entries.length; i++) {
                            pr.push(this.processFilesFromInput({0: entries[i]}));
                        }
                    } else {
                        resolve(null);
                    }
                    result.push(readEntries());
                    Promise.all(pr).then(this.flattenArrayOfFiles).then(resolve);
                }, (error)=> {
                    reject("Error while reading folder");
                });
            })
        };

        result.push(readEntries());
        return Promise.all(result).then(this.flattenArrayOfFiles);
    }

    processInputFromDrop(e) {
        let items = e.dataTransfer.items;

        if (items && items.length && (items[0].webkitGetAsEntry != null)) {
            return Promise.resolve(this.processFilesFromInput(items));
        } else if (items && items.length && !items[0].webkitGetAsEntry) {
            return Promise.resolve(items)
        }
    }

    flattenArrayOfFiles(arrayOfPromises){
        return Promise.resolve(arrayOfPromises.reduce((result, file) => {
            return [...result, ...file];
        }, []))
    }
}
