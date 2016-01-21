System.register(['rxjs/Observable', 'rxjs/operator/map'], function(exports_1) {
    var Observable_1, map_1;
    var obs;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (map_1_1) {
                map_1 = map_1_1;
            }],
        execute: function() {
            obs = new Observable_1.Observable(function (obs) {
                var i = 0;
                setInterval(function (_) { return obs.next(++i); }, 1000);
            });
            map_1.map.call(obs, function (i) { return (i + " seconds elapsed"); }).subscribe(function (msg) { return console.log(msg); });
        }
    }
});
// #enddocregion
//# sourceMappingURL=observable_pure.js.map