System.register(['./directives/ng_class', './directives/ng_for', './directives/ng_if', './directives/ng_style', './directives/ng_switch', './directives/observable_list_diff', './directives/core_directives'], function(exports_1) {
    var exportedNames_1 = {
        'NgClass': true,
        'NgFor': true,
        'NgIf': true,
        'NgStyle': true,
        'NgSwitch': true,
        'NgSwitchWhen': true,
        'NgSwitchDefault': true,
        'CORE_DIRECTIVES': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (ng_class_1_1) {
                exports_1({
                    "NgClass": ng_class_1_1["NgClass"]
                });
            },
            function (ng_for_1_1) {
                exports_1({
                    "NgFor": ng_for_1_1["NgFor"]
                });
            },
            function (ng_if_1_1) {
                exports_1({
                    "NgIf": ng_if_1_1["NgIf"]
                });
            },
            function (ng_style_1_1) {
                exports_1({
                    "NgStyle": ng_style_1_1["NgStyle"]
                });
            },
            function (ng_switch_1_1) {
                exports_1({
                    "NgSwitch": ng_switch_1_1["NgSwitch"],
                    "NgSwitchWhen": ng_switch_1_1["NgSwitchWhen"],
                    "NgSwitchDefault": ng_switch_1_1["NgSwitchDefault"]
                });
            },
            function (observable_list_diff_1_1) {
                exportStar_1(observable_list_diff_1_1);
            },
            function (core_directives_1_1) {
                exports_1({
                    "CORE_DIRECTIVES": core_directives_1_1["CORE_DIRECTIVES"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=directives.js.map