System.register(['angular2/src/facade/exceptions'], function(exports_1) {
    var exceptions_1;
    var PregenProtoChangeDetector;
    return {
        setters:[
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            }],
        execute: function() {
            exports_1("PregenProtoChangeDetectorFactory", Function);
            PregenProtoChangeDetector = (function () {
                function PregenProtoChangeDetector() {
                }
                PregenProtoChangeDetector.isSupported = function () { return false; };
                PregenProtoChangeDetector.prototype.instantiate = function (dispatcher) {
                    throw new exceptions_1.BaseException('Pregen change detection not supported in Js');
                };
                return PregenProtoChangeDetector;
            })();
            exports_1("PregenProtoChangeDetector", PregenProtoChangeDetector);
        }
    }
});
//# sourceMappingURL=pregen_proto_change_detector.js.map