System.register(['angular2/src/facade/lang'], function(exports_1) {
    var lang_1;
    var CAMEL_CASE_REGEXP, DASH_CASE_REGEXP, SINGLE_QUOTE_ESCAPE_STRING_RE, DOUBLE_QUOTE_ESCAPE_STRING_RE, MODULE_SUFFIX;
    function camelCaseToDashCase(input) {
        return lang_1.StringWrapper.replaceAllMapped(input, CAMEL_CASE_REGEXP, function (m) { return '-' + m[1].toLowerCase(); });
    }
    exports_1("camelCaseToDashCase", camelCaseToDashCase);
    function dashCaseToCamelCase(input) {
        return lang_1.StringWrapper.replaceAllMapped(input, DASH_CASE_REGEXP, function (m) { return m[1].toUpperCase(); });
    }
    exports_1("dashCaseToCamelCase", dashCaseToCamelCase);
    function escapeSingleQuoteString(input) {
        if (lang_1.isBlank(input)) {
            return null;
        }
        return "'" + escapeString(input, SINGLE_QUOTE_ESCAPE_STRING_RE) + "'";
    }
    exports_1("escapeSingleQuoteString", escapeSingleQuoteString);
    function escapeDoubleQuoteString(input) {
        if (lang_1.isBlank(input)) {
            return null;
        }
        return "\"" + escapeString(input, DOUBLE_QUOTE_ESCAPE_STRING_RE) + "\"";
    }
    exports_1("escapeDoubleQuoteString", escapeDoubleQuoteString);
    function escapeString(input, re) {
        return lang_1.StringWrapper.replaceAllMapped(input, re, function (match) {
            if (match[0] == '$') {
                return lang_1.IS_DART ? '\\$' : '$';
            }
            else if (match[0] == '\n') {
                return '\\n';
            }
            else if (match[0] == '\r') {
                return '\\r';
            }
            else {
                return "\\" + match[0];
            }
        });
    }
    function codeGenExportVariable(name) {
        if (lang_1.IS_DART) {
            return "const " + name + " = ";
        }
        else {
            return "var " + name + " = exports['" + name + "'] = ";
        }
    }
    exports_1("codeGenExportVariable", codeGenExportVariable);
    function codeGenConstConstructorCall(name) {
        if (lang_1.IS_DART) {
            return "const " + name;
        }
        else {
            return "new " + name;
        }
    }
    exports_1("codeGenConstConstructorCall", codeGenConstConstructorCall);
    function codeGenValueFn(params, value, fnName) {
        if (fnName === void 0) { fnName = ''; }
        if (lang_1.IS_DART) {
            return fnName + "(" + params.join(',') + ") => " + value;
        }
        else {
            return "function " + fnName + "(" + params.join(',') + ") { return " + value + "; }";
        }
    }
    exports_1("codeGenValueFn", codeGenValueFn);
    function codeGenToString(expr) {
        if (lang_1.IS_DART) {
            return "'${" + expr + "}'";
        }
        else {
            // JS automatically convets to string...
            return expr;
        }
    }
    exports_1("codeGenToString", codeGenToString);
    function splitAtColon(input, defaultValues) {
        var parts = lang_1.StringWrapper.split(input.trim(), /\s*:\s*/g);
        if (parts.length > 1) {
            return parts;
        }
        else {
            return defaultValues;
        }
    }
    exports_1("splitAtColon", splitAtColon);
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            CAMEL_CASE_REGEXP = /([A-Z])/g;
            DASH_CASE_REGEXP = /-([a-z])/g;
            SINGLE_QUOTE_ESCAPE_STRING_RE = /'|\\|\n|\r|\$/g;
            DOUBLE_QUOTE_ESCAPE_STRING_RE = /"|\\|\n|\r|\$/g;
            exports_1("MODULE_SUFFIX", MODULE_SUFFIX = lang_1.IS_DART ? '.dart' : '.js');
        }
    }
});
//# sourceMappingURL=util.js.map