System.register(['angular2/src/facade/lang', 'angular2/src/facade/collection', 'angular2/src/core/di', 'angular2/src/core/linker/view_listener', 'angular2/src/platform/dom/dom_adapter', 'angular2/src/core/render/api', 'angular2/src/core/debug/debug_element'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var lang_1, collection_1, di_1, view_listener_1, dom_adapter_1, api_1, debug_element_1;
    var NG_ID_PROPERTY, INSPECT_GLOBAL_NAME, NG_ID_SEPARATOR, _allIdsByView, _allViewsById, _nextId, DebugElementViewListener, ELEMENT_PROBE_PROVIDERS, ELEMENT_PROBE_BINDINGS;
    function _setElementId(element, indices) {
        if (lang_1.isPresent(element) && dom_adapter_1.DOM.isElementNode(element)) {
            dom_adapter_1.DOM.setData(element, NG_ID_PROPERTY, indices.join(NG_ID_SEPARATOR));
        }
    }
    function _getElementId(element) {
        var elId = dom_adapter_1.DOM.getData(element, NG_ID_PROPERTY);
        if (lang_1.isPresent(elId)) {
            return elId.split(NG_ID_SEPARATOR).map(function (partStr) { return lang_1.NumberWrapper.parseInt(partStr, 10); });
        }
        else {
            return null;
        }
    }
    /**
     * Returns a {@link DebugElement} for the given native DOM element, or
     * null if the given native element does not have an Angular view associated
     * with it.
     */
    function inspectNativeElement(element) {
        var elId = _getElementId(element);
        if (lang_1.isPresent(elId)) {
            var view = _allViewsById.get(elId[0]);
            if (lang_1.isPresent(view)) {
                return new debug_element_1.DebugElement_(view, elId[1]);
            }
        }
        return null;
    }
    exports_1("inspectNativeElement", inspectNativeElement);
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            },
            function (di_1_1) {
                di_1 = di_1_1;
            },
            function (view_listener_1_1) {
                view_listener_1 = view_listener_1_1;
            },
            function (dom_adapter_1_1) {
                dom_adapter_1 = dom_adapter_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            },
            function (debug_element_1_1) {
                debug_element_1 = debug_element_1_1;
            }],
        execute: function() {
            NG_ID_PROPERTY = 'ngid';
            INSPECT_GLOBAL_NAME = 'ng.probe';
            NG_ID_SEPARATOR = '#';
            // Need to keep the views in a global Map so that multiple angular apps are supported
            _allIdsByView = new collection_1.Map();
            _allViewsById = new collection_1.Map();
            _nextId = 0;
            DebugElementViewListener = (function () {
                function DebugElementViewListener(_renderer) {
                    this._renderer = _renderer;
                    dom_adapter_1.DOM.setGlobalVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
                }
                DebugElementViewListener.prototype.onViewCreated = function (view) {
                    var viewId = _nextId++;
                    _allViewsById.set(viewId, view);
                    _allIdsByView.set(view, viewId);
                    for (var i = 0; i < view.elementRefs.length; i++) {
                        var el = view.elementRefs[i];
                        _setElementId(this._renderer.getNativeElementSync(el), [viewId, i]);
                    }
                };
                DebugElementViewListener.prototype.onViewDestroyed = function (view) {
                    var viewId = _allIdsByView.get(view);
                    _allIdsByView.delete(view);
                    _allViewsById.delete(viewId);
                };
                DebugElementViewListener = __decorate([
                    di_1.Injectable(), 
                    __metadata('design:paramtypes', [api_1.Renderer])
                ], DebugElementViewListener);
                return DebugElementViewListener;
            })();
            exports_1("DebugElementViewListener", DebugElementViewListener);
            /**
             * Providers which support debugging Angular applications (e.g. via `ng.probe`).
             *
             * ## Example
             *
             * {@example platform/dom/debug/ts/debug_element_view_listener/providers.ts region='providers'}
             */
            exports_1("ELEMENT_PROBE_PROVIDERS", ELEMENT_PROBE_PROVIDERS = lang_1.CONST_EXPR([
                DebugElementViewListener,
                lang_1.CONST_EXPR(new di_1.Provider(view_listener_1.AppViewListener, { useExisting: DebugElementViewListener })),
            ]));
            /**
             * Use {@link ELEMENT_PROBE_PROVIDERS}.
             *
             * @deprecated
             */
            exports_1("ELEMENT_PROBE_BINDINGS", ELEMENT_PROBE_BINDINGS = ELEMENT_PROBE_PROVIDERS);
        }
    }
});
//# sourceMappingURL=debug_element_view_listener.js.map