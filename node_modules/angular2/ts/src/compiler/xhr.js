System.register([], function(exports_1) {
    var XHR;
    return {
        setters:[],
        execute: function() {
            // TODO: vsavkin rename it into TemplateLoader
            /**
             * An interface for retrieving documents by URL that the compiler uses
             * to load templates.
             */
            XHR = (function () {
                function XHR() {
                }
                XHR.prototype.get = function (url) { return null; };
                return XHR;
            })();
            exports_1("XHR", XHR);
        }
    }
});
//# sourceMappingURL=xhr.js.map