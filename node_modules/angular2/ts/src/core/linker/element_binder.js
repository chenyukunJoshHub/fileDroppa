System.register(['angular2/src/facade/lang', 'angular2/src/facade/exceptions'], function(exports_1) {
    var lang_1, exceptions_1;
    var ElementBinder;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            }],
        execute: function() {
            ElementBinder = (function () {
                function ElementBinder(index, parent, distanceToParent, protoElementInjector, componentDirective, nestedProtoView) {
                    this.index = index;
                    this.parent = parent;
                    this.distanceToParent = distanceToParent;
                    this.protoElementInjector = protoElementInjector;
                    this.componentDirective = componentDirective;
                    this.nestedProtoView = nestedProtoView;
                    if (lang_1.isBlank(index)) {
                        throw new exceptions_1.BaseException('null index not allowed.');
                    }
                }
                return ElementBinder;
            })();
            exports_1("ElementBinder", ElementBinder);
        }
    }
});
//# sourceMappingURL=element_binder.js.map