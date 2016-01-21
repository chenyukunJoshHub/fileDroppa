System.register(['angular2/core', 'angular2/bootstrap', 'my_component'], function(exports_1) {
    var core_1, bootstrap_1, my_component_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bootstrap_1_1) {
                bootstrap_1 = bootstrap_1_1;
            },
            function (my_component_1_1) {
                my_component_1 = my_component_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            bootstrap_1.bootstrap(my_component_1.MyComponent);
        }
    }
});
// #enddocregion
//# sourceMappingURL=prod_mode_example.js.map