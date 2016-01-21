System.register(['angular2/core', 'angular2/src/animate/animation_builder', 'angular2/src/mock/animation_builder_mock', 'angular2/src/core/linker/proto_view_factory', 'angular2/src/core/reflection/reflection', 'angular2/src/core/change_detection/change_detection', 'angular2/src/facade/exceptions', 'angular2/src/core/linker/pipe_resolver', 'angular2/src/compiler/xhr', 'angular2/src/platform/dom/dom_adapter', 'angular2/src/mock/directive_resolver_mock', 'angular2/src/mock/view_resolver_mock', 'angular2/src/mock/mock_location_strategy', 'angular2/src/router/location_strategy', 'angular2/src/mock/ng_zone_mock', './test_component_builder', 'angular2/platform/common_dom', 'angular2/src/facade/collection', 'angular2/src/facade/lang', 'angular2/src/core/linker/view_pool', 'angular2/src/core/linker/view_manager_utils', 'angular2/src/platform/dom/dom_tokens', 'angular2/src/platform/dom/dom_renderer', 'angular2/src/platform/dom/shared_styles_host', 'angular2/src/platform/dom/events/dom_events', "angular2/src/web_workers/shared/serializer", './utils', 'angular2/src/compiler/compiler', "angular2/src/platform/dom/dom_renderer", "angular2/src/core/linker/dynamic_component_loader", "angular2/src/core/linker/view_manager"], function(exports_1) {
    var core_1, animation_builder_1, animation_builder_mock_1, proto_view_factory_1, reflection_1, change_detection_1, exceptions_1, pipe_resolver_1, xhr_1, dom_adapter_1, directive_resolver_mock_1, view_resolver_mock_1, mock_location_strategy_1, location_strategy_1, ng_zone_mock_1, test_component_builder_1, common_dom_1, collection_1, lang_1, view_pool_1, view_manager_utils_1, dom_tokens_1, dom_renderer_1, shared_styles_host_1, shared_styles_host_2, dom_events_1, serializer_1, utils_1, compiler_1, dom_renderer_2, dynamic_component_loader_1, view_manager_1;
    var FunctionWithParamTokens;
    /**
     * Returns the root injector providers.
     *
     * This must be kept in sync with the _rootBindings in application.js
     *
     * @returns {any[]}
     */
    function _getRootProviders() {
        return [core_1.provide(reflection_1.Reflector, { useValue: reflection_1.reflector })];
    }
    /**
     * Returns the application injector providers.
     *
     * This must be kept in sync with _injectorBindings() in application.js
     *
     * @returns {any[]}
     */
    function _getAppBindings() {
        var appDoc;
        // The document is only available in browser environment
        try {
            appDoc = dom_adapter_1.DOM.defaultDoc();
        }
        catch (e) {
            appDoc = null;
        }
        return [
            core_1.APPLICATION_COMMON_PROVIDERS,
            core_1.provide(change_detection_1.ChangeDetectorGenConfig, { useValue: new change_detection_1.ChangeDetectorGenConfig(true, false, true) }),
            core_1.provide(dom_tokens_1.DOCUMENT, { useValue: appDoc }),
            core_1.provide(dom_renderer_1.DomRenderer, { useClass: dom_renderer_2.DomRenderer_ }),
            core_1.provide(core_1.Renderer, { useExisting: dom_renderer_1.DomRenderer }),
            core_1.provide(core_1.APP_ID, { useValue: 'a' }),
            shared_styles_host_1.DomSharedStylesHost,
            core_1.provide(shared_styles_host_2.SharedStylesHost, { useExisting: shared_styles_host_1.DomSharedStylesHost }),
            view_pool_1.AppViewPool,
            core_1.provide(core_1.AppViewManager, { useClass: view_manager_1.AppViewManager_ }),
            view_manager_utils_1.AppViewManagerUtils,
            serializer_1.Serializer,
            common_dom_1.ELEMENT_PROBE_PROVIDERS,
            core_1.provide(view_pool_1.APP_VIEW_POOL_CAPACITY, { useValue: 500 }),
            proto_view_factory_1.ProtoViewFactory,
            core_1.provide(core_1.DirectiveResolver, { useClass: directive_resolver_mock_1.MockDirectiveResolver }),
            core_1.provide(core_1.ViewResolver, { useClass: view_resolver_mock_1.MockViewResolver }),
            core_1.provide(change_detection_1.IterableDiffers, { useValue: change_detection_1.defaultIterableDiffers }),
            core_1.provide(change_detection_1.KeyValueDiffers, { useValue: change_detection_1.defaultKeyValueDiffers }),
            utils_1.Log,
            core_1.provide(core_1.DynamicComponentLoader, { useClass: dynamic_component_loader_1.DynamicComponentLoader_ }),
            pipe_resolver_1.PipeResolver,
            core_1.provide(exceptions_1.ExceptionHandler, { useValue: new exceptions_1.ExceptionHandler(dom_adapter_1.DOM) }),
            core_1.provide(location_strategy_1.LocationStrategy, { useClass: mock_location_strategy_1.MockLocationStrategy }),
            core_1.provide(xhr_1.XHR, { useClass: dom_adapter_1.DOM.getXHR() }),
            test_component_builder_1.TestComponentBuilder,
            core_1.provide(core_1.NgZone, { useClass: ng_zone_mock_1.MockNgZone }),
            core_1.provide(animation_builder_1.AnimationBuilder, { useClass: animation_builder_mock_1.MockAnimationBuilder }),
            common_dom_1.EventManager,
            new core_1.Provider(common_dom_1.EVENT_MANAGER_PLUGINS, { useClass: dom_events_1.DomEventsPlugin, multi: true })
        ];
    }
    function _runtimeCompilerBindings() {
        return [
            core_1.provide(xhr_1.XHR, { useClass: dom_adapter_1.DOM.getXHR() }),
            compiler_1.COMPILER_PROVIDERS,
        ];
    }
    function createTestInjector(providers) {
        var rootInjector = core_1.Injector.resolveAndCreate(_getRootProviders());
        return rootInjector.resolveAndCreateChild(collection_1.ListWrapper.concat(_getAppBindings(), providers));
    }
    exports_1("createTestInjector", createTestInjector);
    function createTestInjectorWithRuntimeCompiler(providers) {
        return createTestInjector(collection_1.ListWrapper.concat(_runtimeCompilerBindings(), providers));
    }
    exports_1("createTestInjectorWithRuntimeCompiler", createTestInjectorWithRuntimeCompiler);
    /**
     * Allows injecting dependencies in `beforeEach()` and `it()`.
     *
     * Example:
     *
     * ```
     * beforeEach(inject([Dependency, AClass], (dep, object) => {
     *   // some code that uses `dep` and `object`
     *   // ...
     * }));
     *
     * it('...', inject([AClass], (object) => {
     *   object.doSomething();
     *   expect(...);
     * })
     * ```
     *
     * Notes:
     * - inject is currently a function because of some Traceur limitation the syntax should eventually
     *   becomes `it('...', @Inject (object: AClass, async: AsyncTestCompleter) => { ... });`
     *
     * @param {Array} tokens
     * @param {Function} fn
     * @return {FunctionWithParamTokens}
     */
    function inject(tokens, fn) {
        return new FunctionWithParamTokens(tokens, fn, false);
    }
    exports_1("inject", inject);
    /**
     * Allows injecting dependencies in `beforeEach()` and `it()`. The test must return
     * a promise which will resolve when all asynchronous activity is complete.
     *
     * Example:
     *
     * ```
     * it('...', injectAsync([AClass], (object) => {
     *   return object.doSomething().then(() => {
     *     expect(...);
     *   });
     * })
     * ```
     *
     * @param {Array} tokens
     * @param {Function} fn
     * @return {FunctionWithParamTokens}
     */
    function injectAsync(tokens, fn) {
        return new FunctionWithParamTokens(tokens, fn, true);
    }
    exports_1("injectAsync", injectAsync);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (animation_builder_1_1) {
                animation_builder_1 = animation_builder_1_1;
            },
            function (animation_builder_mock_1_1) {
                animation_builder_mock_1 = animation_builder_mock_1_1;
            },
            function (proto_view_factory_1_1) {
                proto_view_factory_1 = proto_view_factory_1_1;
            },
            function (reflection_1_1) {
                reflection_1 = reflection_1_1;
            },
            function (change_detection_1_1) {
                change_detection_1 = change_detection_1_1;
            },
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            },
            function (pipe_resolver_1_1) {
                pipe_resolver_1 = pipe_resolver_1_1;
            },
            function (xhr_1_1) {
                xhr_1 = xhr_1_1;
            },
            function (dom_adapter_1_1) {
                dom_adapter_1 = dom_adapter_1_1;
            },
            function (directive_resolver_mock_1_1) {
                directive_resolver_mock_1 = directive_resolver_mock_1_1;
            },
            function (view_resolver_mock_1_1) {
                view_resolver_mock_1 = view_resolver_mock_1_1;
            },
            function (mock_location_strategy_1_1) {
                mock_location_strategy_1 = mock_location_strategy_1_1;
            },
            function (location_strategy_1_1) {
                location_strategy_1 = location_strategy_1_1;
            },
            function (ng_zone_mock_1_1) {
                ng_zone_mock_1 = ng_zone_mock_1_1;
            },
            function (test_component_builder_1_1) {
                test_component_builder_1 = test_component_builder_1_1;
            },
            function (common_dom_1_1) {
                common_dom_1 = common_dom_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (view_pool_1_1) {
                view_pool_1 = view_pool_1_1;
            },
            function (view_manager_utils_1_1) {
                view_manager_utils_1 = view_manager_utils_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            },
            function (dom_renderer_1_1) {
                dom_renderer_1 = dom_renderer_1_1;
            },
            function (shared_styles_host_1_1) {
                shared_styles_host_1 = shared_styles_host_1_1;
                shared_styles_host_2 = shared_styles_host_1_1;
            },
            function (dom_events_1_1) {
                dom_events_1 = dom_events_1_1;
            },
            function (serializer_1_1) {
                serializer_1 = serializer_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (compiler_1_1) {
                compiler_1 = compiler_1_1;
            },
            function (dom_renderer_2_1) {
                dom_renderer_2 = dom_renderer_2_1;
            },
            function (dynamic_component_loader_1_1) {
                dynamic_component_loader_1 = dynamic_component_loader_1_1;
            },
            function (view_manager_1_1) {
                view_manager_1 = view_manager_1_1;
            }],
        execute: function() {
            FunctionWithParamTokens = (function () {
                function FunctionWithParamTokens(_tokens, _fn, isAsync) {
                    this._tokens = _tokens;
                    this._fn = _fn;
                    this.isAsync = isAsync;
                }
                /**
                 * Returns the value of the executed function.
                 */
                FunctionWithParamTokens.prototype.execute = function (injector) {
                    var params = this._tokens.map(function (t) { return injector.get(t); });
                    return lang_1.FunctionWrapper.apply(this._fn, params);
                };
                FunctionWithParamTokens.prototype.hasToken = function (token) { return this._tokens.indexOf(token) > -1; };
                return FunctionWithParamTokens;
            })();
            exports_1("FunctionWithParamTokens", FunctionWithParamTokens);
        }
    }
});
//# sourceMappingURL=test_injector.js.map