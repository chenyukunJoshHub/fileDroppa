System.register(['angular2/src/facade/lang', 'angular2/src/core/di', 'angular2/src/core/console', './reflection/reflection', 'angular2/src/core/testability/testability'], function(exports_1) {
    var lang_1, di_1, console_1, reflection_1, testability_1;
    var PLATFORM_COMMON_PROVIDERS;
    function _reflector() {
        return reflection_1.reflector;
    }
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (di_1_1) {
                di_1 = di_1_1;
            },
            function (console_1_1) {
                console_1 = console_1_1;
            },
            function (reflection_1_1) {
                reflection_1 = reflection_1_1;
            },
            function (testability_1_1) {
                testability_1 = testability_1_1;
            }],
        execute: function() {
            /**
             * A default set of providers which should be included in any Angular platform.
             */
            exports_1("PLATFORM_COMMON_PROVIDERS", PLATFORM_COMMON_PROVIDERS = lang_1.CONST_EXPR([new di_1.Provider(reflection_1.Reflector, { useFactory: _reflector, deps: [] }), testability_1.TestabilityRegistry, console_1.Console]));
        }
    }
});
//# sourceMappingURL=platform_common_providers.js.map