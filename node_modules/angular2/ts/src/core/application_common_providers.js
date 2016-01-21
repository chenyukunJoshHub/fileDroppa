System.register(['angular2/src/facade/lang', 'angular2/src/core/di', './application_tokens', './change_detection/change_detection', './linker/view_pool', './linker/view_manager', "./linker/view_manager", './linker/view_manager_utils', './linker/view_resolver', './linker/view_listener', './linker/proto_view_factory', './linker/directive_resolver', './linker/pipe_resolver', './linker/compiler', "./linker/compiler", './linker/dynamic_component_loader', "./linker/dynamic_component_loader"], function(exports_1) {
    var lang_1, di_1, application_tokens_1, change_detection_1, view_pool_1, view_manager_1, view_manager_2, view_manager_utils_1, view_resolver_1, view_listener_1, proto_view_factory_1, directive_resolver_1, pipe_resolver_1, compiler_1, compiler_2, dynamic_component_loader_1, dynamic_component_loader_2;
    var APPLICATION_COMMON_PROVIDERS;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (di_1_1) {
                di_1 = di_1_1;
            },
            function (application_tokens_1_1) {
                application_tokens_1 = application_tokens_1_1;
            },
            function (change_detection_1_1) {
                change_detection_1 = change_detection_1_1;
            },
            function (view_pool_1_1) {
                view_pool_1 = view_pool_1_1;
            },
            function (view_manager_1_1) {
                view_manager_1 = view_manager_1_1;
            },
            function (view_manager_2_1) {
                view_manager_2 = view_manager_2_1;
            },
            function (view_manager_utils_1_1) {
                view_manager_utils_1 = view_manager_utils_1_1;
            },
            function (view_resolver_1_1) {
                view_resolver_1 = view_resolver_1_1;
            },
            function (view_listener_1_1) {
                view_listener_1 = view_listener_1_1;
            },
            function (proto_view_factory_1_1) {
                proto_view_factory_1 = proto_view_factory_1_1;
            },
            function (directive_resolver_1_1) {
                directive_resolver_1 = directive_resolver_1_1;
            },
            function (pipe_resolver_1_1) {
                pipe_resolver_1 = pipe_resolver_1_1;
            },
            function (compiler_1_1) {
                compiler_1 = compiler_1_1;
            },
            function (compiler_2_1) {
                compiler_2 = compiler_2_1;
            },
            function (dynamic_component_loader_1_1) {
                dynamic_component_loader_1 = dynamic_component_loader_1_1;
            },
            function (dynamic_component_loader_2_1) {
                dynamic_component_loader_2 = dynamic_component_loader_2_1;
            }],
        execute: function() {
            /**
             * A default set of providers which should be included in any Angular
             * application, regardless of the platform it runs onto.
             */
            exports_1("APPLICATION_COMMON_PROVIDERS", APPLICATION_COMMON_PROVIDERS = lang_1.CONST_EXPR([
                new di_1.Provider(compiler_1.Compiler, { useClass: compiler_2.Compiler_ }),
                application_tokens_1.APP_ID_RANDOM_PROVIDER,
                view_pool_1.AppViewPool,
                new di_1.Provider(view_pool_1.APP_VIEW_POOL_CAPACITY, { useValue: 10000 }),
                new di_1.Provider(view_manager_1.AppViewManager, { useClass: view_manager_2.AppViewManager_ }),
                view_manager_utils_1.AppViewManagerUtils,
                view_listener_1.AppViewListener,
                proto_view_factory_1.ProtoViewFactory,
                view_resolver_1.ViewResolver,
                new di_1.Provider(change_detection_1.IterableDiffers, { useValue: change_detection_1.defaultIterableDiffers }),
                new di_1.Provider(change_detection_1.KeyValueDiffers, { useValue: change_detection_1.defaultKeyValueDiffers }),
                directive_resolver_1.DirectiveResolver,
                pipe_resolver_1.PipeResolver,
                new di_1.Provider(dynamic_component_loader_1.DynamicComponentLoader, { useClass: dynamic_component_loader_2.DynamicComponentLoader_ })
            ]));
        }
    }
});
//# sourceMappingURL=application_common_providers.js.map