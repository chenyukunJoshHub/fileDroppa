System.register([], function(exports_1) {
    var RENDERER_CHANNEL, XHR_CHANNEL, EVENT_CHANNEL;
    return {
        setters:[],
        execute: function() {
            /**
             * All channels used by angular's WebWorker components are listed here.
             * You should not use these channels in your application code.
             */
            exports_1("RENDERER_CHANNEL", RENDERER_CHANNEL = "ng-Renderer");
            exports_1("XHR_CHANNEL", XHR_CHANNEL = "ng-XHR");
            exports_1("EVENT_CHANNEL", EVENT_CHANNEL = "ng-events");
        }
    }
});
//# sourceMappingURL=messaging_api.js.map