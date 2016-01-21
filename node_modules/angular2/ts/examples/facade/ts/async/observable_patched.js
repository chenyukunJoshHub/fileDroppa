System.register(['rxjs/Observable', 'rxjs/add/operator/map'], function(exports_1) {
    var Observable_1;
    var obs;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            obs = new Observable_1.Observable(function (obs) {
                var i = 0;
                setInterval(function (_) { return obs.next(++i); }, 1000);
            });
            obs.map(function (i) { return (i + " seconds elapsed"); }).subscribe(function (msg) { return console.log(msg); });
        }
    }
});
// #enddocregion
//# sourceMappingURL=observable_patched.js.map