System.register(['angular2/src/facade/lang'], function(exports_1) {
    var lang_1;
    var Math, NaN;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            exports_1("Math", Math = lang_1.global.Math);
            exports_1("NaN", NaN = typeof NaN);
        }
    }
});
//# sourceMappingURL=math.js.map