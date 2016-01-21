System.register(['./pipes/async_pipe', './pipes/uppercase_pipe', './pipes/lowercase_pipe', './pipes/json_pipe', './pipes/slice_pipe', './pipes/date_pipe', './pipes/number_pipe', 'angular2/src/facade/lang'], function(exports_1) {
    var async_pipe_1, uppercase_pipe_1, lowercase_pipe_1, json_pipe_1, slice_pipe_1, date_pipe_1, number_pipe_1, lang_1;
    var COMMON_PIPES;
    return {
        setters:[
            function (async_pipe_1_1) {
                async_pipe_1 = async_pipe_1_1;
                exports_1({
                    "AsyncPipe": async_pipe_1_1["AsyncPipe"]
                });
            },
            function (uppercase_pipe_1_1) {
                uppercase_pipe_1 = uppercase_pipe_1_1;
                exports_1({
                    "UpperCasePipe": uppercase_pipe_1_1["UpperCasePipe"]
                });
            },
            function (lowercase_pipe_1_1) {
                lowercase_pipe_1 = lowercase_pipe_1_1;
                exports_1({
                    "LowerCasePipe": lowercase_pipe_1_1["LowerCasePipe"]
                });
            },
            function (json_pipe_1_1) {
                json_pipe_1 = json_pipe_1_1;
                exports_1({
                    "JsonPipe": json_pipe_1_1["JsonPipe"]
                });
            },
            function (slice_pipe_1_1) {
                slice_pipe_1 = slice_pipe_1_1;
                exports_1({
                    "SlicePipe": slice_pipe_1_1["SlicePipe"]
                });
            },
            function (date_pipe_1_1) {
                date_pipe_1 = date_pipe_1_1;
                exports_1({
                    "DatePipe": date_pipe_1_1["DatePipe"]
                });
            },
            function (number_pipe_1_1) {
                number_pipe_1 = number_pipe_1_1;
                exports_1({
                    "NumberPipe": number_pipe_1_1["NumberPipe"],
                    "DecimalPipe": number_pipe_1_1["DecimalPipe"],
                    "PercentPipe": number_pipe_1_1["PercentPipe"],
                    "CurrencyPipe": number_pipe_1_1["CurrencyPipe"]
                });
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            /**
             * A collection of Angular core pipes that are likely to be used in each and every
             * application.
             *
             * This collection can be used to quickly enumerate all the built-in pipes in the `pipes`
             * property of the `@Component` or `@View` decorators.
             */
            exports_1("COMMON_PIPES", COMMON_PIPES = lang_1.CONST_EXPR([
                async_pipe_1.AsyncPipe,
                uppercase_pipe_1.UpperCasePipe,
                lowercase_pipe_1.LowerCasePipe,
                json_pipe_1.JsonPipe,
                slice_pipe_1.SlicePipe,
                number_pipe_1.DecimalPipe,
                number_pipe_1.PercentPipe,
                number_pipe_1.CurrencyPipe,
                date_pipe_1.DatePipe
            ]));
        }
    }
});
//# sourceMappingURL=pipes.js.map