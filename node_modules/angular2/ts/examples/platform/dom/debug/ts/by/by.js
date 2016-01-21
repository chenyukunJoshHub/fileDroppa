System.register(['angular2/platform/browser', 'angular2/core'], function(exports_1) {
    var browser_1, core_1;
    var debugElement, MyDirective;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyDirective = (function () {
                function MyDirective() {
                }
                return MyDirective;
            })();
            // #docregion by_all
            debugElement.query(browser_1.By.all(), core_1.Scope.all);
            // #enddocregion
            // #docregion by_css
            debugElement.query(browser_1.By.css('[attribute]'), core_1.Scope.all);
            // #enddocregion
            // #docregion by_directive
            debugElement.query(browser_1.By.directive(MyDirective), core_1.Scope.all);
        }
    }
});
// #enddocregion
//# sourceMappingURL=by.js.map