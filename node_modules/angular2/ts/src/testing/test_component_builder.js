System.register(['angular2/core', 'angular2/src/facade/lang', 'angular2/src/facade/collection', 'angular2/src/core/linker/view_ref', './utils', 'angular2/src/platform/dom/dom_tokens', 'angular2/src/platform/dom/dom_adapter', 'angular2/src/core/debug/debug_element'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, lang_1, collection_1, view_ref_1, utils_1, dom_tokens_1, dom_adapter_1, debug_element_1;
    var ComponentFixture, ComponentFixture_, _nextRootElementId, TestComponentBuilder;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            },
            function (view_ref_1_1) {
                view_ref_1 = view_ref_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            },
            function (dom_adapter_1_1) {
                dom_adapter_1 = dom_adapter_1_1;
            },
            function (debug_element_1_1) {
                debug_element_1 = debug_element_1_1;
            }],
        execute: function() {
            /**
             * Fixture for debugging and testing a component.
             */
            ComponentFixture = (function () {
                function ComponentFixture() {
                }
                return ComponentFixture;
            })();
            exports_1("ComponentFixture", ComponentFixture);
            ComponentFixture_ = (function (_super) {
                __extends(ComponentFixture_, _super);
                function ComponentFixture_(componentRef) {
                    _super.call(this);
                    this.debugElement = new debug_element_1.DebugElement_(view_ref_1.internalView(componentRef.hostView), 0);
                    this.componentInstance = this.debugElement.componentInstance;
                    this.nativeElement = this.debugElement.nativeElement;
                    this._componentParentView = view_ref_1.internalView(componentRef.hostView);
                    this._componentRef = componentRef;
                }
                ComponentFixture_.prototype.detectChanges = function () {
                    this._componentParentView.changeDetector.detectChanges();
                    this._componentParentView.changeDetector.checkNoChanges();
                };
                ComponentFixture_.prototype.destroy = function () { this._componentRef.dispose(); };
                return ComponentFixture_;
            })(ComponentFixture);
            exports_1("ComponentFixture_", ComponentFixture_);
            _nextRootElementId = 0;
            /**
             * Builds a ComponentFixture for use in component level tests.
             */
            TestComponentBuilder = (function () {
                function TestComponentBuilder(_injector) {
                    this._injector = _injector;
                    /** @internal */
                    this._bindingsOverrides = new Map();
                    /** @internal */
                    this._directiveOverrides = new Map();
                    /** @internal */
                    this._templateOverrides = new Map();
                    /** @internal */
                    this._viewBindingsOverrides = new Map();
                    /** @internal */
                    this._viewOverrides = new Map();
                }
                /** @internal */
                TestComponentBuilder.prototype._clone = function () {
                    var clone = new TestComponentBuilder(this._injector);
                    clone._viewOverrides = collection_1.MapWrapper.clone(this._viewOverrides);
                    clone._directiveOverrides = collection_1.MapWrapper.clone(this._directiveOverrides);
                    clone._templateOverrides = collection_1.MapWrapper.clone(this._templateOverrides);
                    return clone;
                };
                /**
                 * Overrides only the html of a {@link ComponentMetadata}.
                 * All the other properties of the component's {@link ViewMetadata} are preserved.
                 *
                 * @param {Type} component
                 * @param {string} html
                 *
                 * @return {TestComponentBuilder}
                 */
                TestComponentBuilder.prototype.overrideTemplate = function (componentType, template) {
                    var clone = this._clone();
                    clone._templateOverrides.set(componentType, template);
                    return clone;
                };
                /**
                 * Overrides a component's {@link ViewMetadata}.
                 *
                 * @param {Type} component
                 * @param {view} View
                 *
                 * @return {TestComponentBuilder}
                 */
                TestComponentBuilder.prototype.overrideView = function (componentType, view) {
                    var clone = this._clone();
                    clone._viewOverrides.set(componentType, view);
                    return clone;
                };
                /**
                 * Overrides the directives from the component {@link ViewMetadata}.
                 *
                 * @param {Type} component
                 * @param {Type} from
                 * @param {Type} to
                 *
                 * @return {TestComponentBuilder}
                 */
                TestComponentBuilder.prototype.overrideDirective = function (componentType, from, to) {
                    var clone = this._clone();
                    var overridesForComponent = clone._directiveOverrides.get(componentType);
                    if (!lang_1.isPresent(overridesForComponent)) {
                        clone._directiveOverrides.set(componentType, new Map());
                        overridesForComponent = clone._directiveOverrides.get(componentType);
                    }
                    overridesForComponent.set(from, to);
                    return clone;
                };
                /**
                 * Overrides one or more injectables configured via `providers` metadata property of a directive
                 * or
                 * component.
                 * Very useful when certain providers need to be mocked out.
                 *
                 * The providers specified via this method are appended to the existing `providers` causing the
                 * duplicated providers to
                 * be overridden.
                 *
                 * @param {Type} component
                 * @param {any[]} providers
                 *
                 * @return {TestComponentBuilder}
                 */
                TestComponentBuilder.prototype.overrideProviders = function (type, providers) {
                    var clone = this._clone();
                    clone._bindingsOverrides.set(type, providers);
                    return clone;
                };
                /**
                 * @deprecated
                 */
                TestComponentBuilder.prototype.overrideBindings = function (type, providers) {
                    return this.overrideProviders(type, providers);
                };
                /**
                 * Overrides one or more injectables configured via `providers` metadata property of a directive
                 * or
                 * component.
                 * Very useful when certain providers need to be mocked out.
                 *
                 * The providers specified via this method are appended to the existing `providers` causing the
                 * duplicated providers to
                 * be overridden.
                 *
                 * @param {Type} component
                 * @param {any[]} providers
                 *
                 * @return {TestComponentBuilder}
                 */
                TestComponentBuilder.prototype.overrideViewProviders = function (type, providers) {
                    var clone = this._clone();
                    clone._viewBindingsOverrides.set(type, providers);
                    return clone;
                };
                /**
                 * @deprecated
                 */
                TestComponentBuilder.prototype.overrideViewBindings = function (type, providers) {
                    return this.overrideViewProviders(type, providers);
                };
                /**
                 * Builds and returns a ComponentFixture.
                 *
                 * @return {Promise<ComponentFixture>}
                 */
                TestComponentBuilder.prototype.createAsync = function (rootComponentType) {
                    var mockDirectiveResolver = this._injector.get(core_1.DirectiveResolver);
                    var mockViewResolver = this._injector.get(core_1.ViewResolver);
                    this._viewOverrides.forEach(function (view, type) { return mockViewResolver.setView(type, view); });
                    this._templateOverrides.forEach(function (template, type) {
                        return mockViewResolver.setInlineTemplate(type, template);
                    });
                    this._directiveOverrides.forEach(function (overrides, component) {
                        overrides.forEach(function (to, from) { mockViewResolver.overrideViewDirective(component, from, to); });
                    });
                    this._bindingsOverrides.forEach(function (bindings, type) {
                        return mockDirectiveResolver.setBindingsOverride(type, bindings);
                    });
                    this._viewBindingsOverrides.forEach(function (bindings, type) { return mockDirectiveResolver.setViewBindingsOverride(type, bindings); });
                    var rootElId = "root" + _nextRootElementId++;
                    var rootEl = utils_1.el("<div id=\"" + rootElId + "\"></div>");
                    var doc = this._injector.get(dom_tokens_1.DOCUMENT);
                    // TODO(juliemr): can/should this be optional?
                    var oldRoots = dom_adapter_1.DOM.querySelectorAll(doc, '[id^=root]');
                    for (var i = 0; i < oldRoots.length; i++) {
                        dom_adapter_1.DOM.remove(oldRoots[i]);
                    }
                    dom_adapter_1.DOM.appendChild(doc.body, rootEl);
                    return this._injector.get(core_1.DynamicComponentLoader)
                        .loadAsRoot(rootComponentType, "#" + rootElId, this._injector)
                        .then(function (componentRef) { return new ComponentFixture_(componentRef); });
                };
                TestComponentBuilder = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_1.Injector])
                ], TestComponentBuilder);
                return TestComponentBuilder;
            })();
            exports_1("TestComponentBuilder", TestComponentBuilder);
        }
    }
});
//# sourceMappingURL=test_component_builder.js.map