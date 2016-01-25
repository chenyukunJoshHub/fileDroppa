System.register(["./Directives/FileDropZone", "./Directives/FileDroppa", "./Directives/FileList"], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (FileDropZone_1_1) {
                exportStar_1(FileDropZone_1_1);
            },
            function (FileDroppa_1_1) {
                exportStar_1(FileDroppa_1_1);
            },
            function (FileList_1_1) {
                exportStar_1(FileList_1_1);
            }],
        execute: function() {
        }
    }
});
