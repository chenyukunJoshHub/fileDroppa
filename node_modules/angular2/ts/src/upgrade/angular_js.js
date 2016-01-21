System.register([], function(exports_1) {
    var angular, e, bootstrap, module, element, version;
    function noNg() {
        throw new Error('AngularJS v1.x is not loaded!');
    }
    return {
        setters:[],
        execute: function() {
            angular = { bootstrap: noNg, module: noNg, element: noNg, version: noNg };
            try {
                if (window.hasOwnProperty('angular')) {
                    angular = window.angular;
                }
            }
            catch (e) {
            }
            exports_1("bootstrap", bootstrap = angular.bootstrap);
            exports_1("module", module = angular.module);
            exports_1("element", element = angular.element);
            exports_1("version", version = angular.version);
        }
    }
});
//# sourceMappingURL=angular_js.js.map