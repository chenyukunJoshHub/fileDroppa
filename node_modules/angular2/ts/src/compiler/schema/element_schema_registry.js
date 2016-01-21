System.register([], function(exports_1) {
    var ElementSchemaRegistry;
    return {
        setters:[],
        execute: function() {
            ElementSchemaRegistry = (function () {
                function ElementSchemaRegistry() {
                }
                ElementSchemaRegistry.prototype.hasProperty = function (tagName, propName) { return true; };
                ElementSchemaRegistry.prototype.getMappedPropName = function (propName) { return propName; };
                return ElementSchemaRegistry;
            })();
            exports_1("ElementSchemaRegistry", ElementSchemaRegistry);
        }
    }
});
//# sourceMappingURL=element_schema_registry.js.map