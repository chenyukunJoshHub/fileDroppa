System.register(['angular2/bootstrap', 'angular2/common', 'angular2/core'], function(exports_1) {
    var bootstrap_1, common_1, core_1;
    var MyApp, myValidator;
    return {
        setters:[
            function (bootstrap_1_1) {
                bootstrap_1 = bootstrap_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyApp = null;
            myValidator = null;
            // #docregion ng_validators
            bootstrap_1.bootstrap(MyApp, [new core_1.Provider(common_1.NG_VALIDATORS, { useValue: myValidator, multi: true })]);
        }
    }
});
// #enddocregion
//# sourceMappingURL=ng_validators.js.map