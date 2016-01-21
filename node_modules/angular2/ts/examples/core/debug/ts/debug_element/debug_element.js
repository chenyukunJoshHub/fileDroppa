System.register(['angular2/core'], function(exports_1) {
    var core_1;
    var debugElement, predicate;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // #docregion scope_all
            debugElement.query(predicate, core_1.Scope.all);
            // #enddocregion
            // #docregion scope_light
            debugElement.query(predicate, core_1.Scope.light);
            // #enddocregion
            // #docregion scope_view
            debugElement.query(predicate, core_1.Scope.view);
        }
    }
});
// #enddocregion
//# sourceMappingURL=debug_element.js.map