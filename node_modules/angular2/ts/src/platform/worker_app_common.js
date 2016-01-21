System.register(['angular2/src/compiler/xhr', 'angular2/src/web_workers/worker/xhr_impl', 'angular2/src/web_workers/worker/renderer', 'angular2/src/facade/lang', 'angular2/src/core/render/api', 'angular2/core', "angular2/common", 'angular2/src/web_workers/shared/client_message_broker', 'angular2/src/web_workers/shared/service_message_broker', 'angular2/src/compiler/compiler', "angular2/src/web_workers/shared/serializer", "angular2/src/web_workers/shared/api", 'angular2/src/core/di', 'angular2/src/web_workers/shared/render_proto_view_ref_store', 'angular2/src/web_workers/shared/render_view_with_fragments_store', 'angular2/src/web_workers/worker/event_dispatcher'], function(exports_1) {
    var xhr_1, xhr_impl_1, renderer_1, lang_1, api_1, core_1, common_1, client_message_broker_1, service_message_broker_1, compiler_1, serializer_1, api_2, di_1, render_proto_view_ref_store_1, render_view_with_fragments_store_1, event_dispatcher_1;
    var PrintLogger, WORKER_APP_PLATFORM, WORKER_APP_APPLICATION_COMMON;
    function _exceptionHandler() {
        return new core_1.ExceptionHandler(new PrintLogger());
    }
    return {
        setters:[
            function (xhr_1_1) {
                xhr_1 = xhr_1_1;
            },
            function (xhr_impl_1_1) {
                xhr_impl_1 = xhr_impl_1_1;
            },
            function (renderer_1_1) {
                renderer_1 = renderer_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (client_message_broker_1_1) {
                client_message_broker_1 = client_message_broker_1_1;
            },
            function (service_message_broker_1_1) {
                service_message_broker_1 = service_message_broker_1_1;
            },
            function (compiler_1_1) {
                compiler_1 = compiler_1_1;
            },
            function (serializer_1_1) {
                serializer_1 = serializer_1_1;
            },
            function (api_2_1) {
                api_2 = api_2_1;
            },
            function (di_1_1) {
                di_1 = di_1_1;
            },
            function (render_proto_view_ref_store_1_1) {
                render_proto_view_ref_store_1 = render_proto_view_ref_store_1_1;
            },
            function (render_view_with_fragments_store_1_1) {
                render_view_with_fragments_store_1 = render_view_with_fragments_store_1_1;
            },
            function (event_dispatcher_1_1) {
                event_dispatcher_1 = event_dispatcher_1_1;
            }],
        execute: function() {
            PrintLogger = (function () {
                function PrintLogger() {
                    this.log = lang_1.print;
                    this.logError = lang_1.print;
                    this.logGroup = lang_1.print;
                }
                PrintLogger.prototype.logGroupEnd = function () { };
                return PrintLogger;
            })();
            exports_1("WORKER_APP_PLATFORM", WORKER_APP_PLATFORM = lang_1.CONST_EXPR([core_1.PLATFORM_COMMON_PROVIDERS]));
            exports_1("WORKER_APP_APPLICATION_COMMON", WORKER_APP_APPLICATION_COMMON = lang_1.CONST_EXPR([
                core_1.APPLICATION_COMMON_PROVIDERS,
                compiler_1.COMPILER_PROVIDERS,
                common_1.FORM_PROVIDERS,
                serializer_1.Serializer,
                new di_1.Provider(core_1.PLATFORM_PIPES, { useValue: common_1.COMMON_PIPES, multi: true }),
                new di_1.Provider(core_1.PLATFORM_DIRECTIVES, { useValue: common_1.COMMON_DIRECTIVES, multi: true }),
                new di_1.Provider(client_message_broker_1.ClientMessageBrokerFactory, { useClass: client_message_broker_1.ClientMessageBrokerFactory_ }),
                new di_1.Provider(service_message_broker_1.ServiceMessageBrokerFactory, { useClass: service_message_broker_1.ServiceMessageBrokerFactory_ }),
                renderer_1.WebWorkerRenderer,
                new di_1.Provider(api_1.Renderer, { useExisting: renderer_1.WebWorkerRenderer }),
                new di_1.Provider(api_2.ON_WEB_WORKER, { useValue: true }),
                render_view_with_fragments_store_1.RenderViewWithFragmentsStore,
                render_proto_view_ref_store_1.RenderProtoViewRefStore,
                new di_1.Provider(core_1.ExceptionHandler, { useFactory: _exceptionHandler, deps: [] }),
                xhr_impl_1.WebWorkerXHRImpl,
                new di_1.Provider(xhr_1.XHR, { useExisting: xhr_impl_1.WebWorkerXHRImpl }),
                event_dispatcher_1.WebWorkerEventDispatcher
            ]));
        }
    }
});
//# sourceMappingURL=worker_app_common.js.map