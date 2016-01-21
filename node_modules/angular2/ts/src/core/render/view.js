System.register(['angular2/src/facade/exceptions', 'angular2/src/facade/collection', 'angular2/src/facade/lang', './api'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var exceptions_1, collection_1, lang_1, api_1;
    var DefaultProtoViewRef, DefaultRenderFragmentRef, DefaultRenderView;
    return {
        setters:[
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            }],
        execute: function() {
            DefaultProtoViewRef = (function (_super) {
                __extends(DefaultProtoViewRef, _super);
                function DefaultProtoViewRef(template, cmds) {
                    _super.call(this);
                    this.template = template;
                    this.cmds = cmds;
                }
                return DefaultProtoViewRef;
            })(api_1.RenderProtoViewRef);
            exports_1("DefaultProtoViewRef", DefaultProtoViewRef);
            DefaultRenderFragmentRef = (function (_super) {
                __extends(DefaultRenderFragmentRef, _super);
                function DefaultRenderFragmentRef(nodes) {
                    _super.call(this);
                    this.nodes = nodes;
                }
                return DefaultRenderFragmentRef;
            })(api_1.RenderFragmentRef);
            exports_1("DefaultRenderFragmentRef", DefaultRenderFragmentRef);
            DefaultRenderView = (function (_super) {
                __extends(DefaultRenderView, _super);
                function DefaultRenderView(fragments, boundTextNodes, boundElements, nativeShadowRoots, globalEventAdders, rootContentInsertionPoints) {
                    _super.call(this);
                    this.fragments = fragments;
                    this.boundTextNodes = boundTextNodes;
                    this.boundElements = boundElements;
                    this.nativeShadowRoots = nativeShadowRoots;
                    this.globalEventAdders = globalEventAdders;
                    this.rootContentInsertionPoints = rootContentInsertionPoints;
                    this.hydrated = false;
                    this.eventDispatcher = null;
                    this.globalEventRemovers = null;
                }
                DefaultRenderView.prototype.hydrate = function () {
                    if (this.hydrated)
                        throw new exceptions_1.BaseException('The view is already hydrated.');
                    this.hydrated = true;
                    this.globalEventRemovers = collection_1.ListWrapper.createFixedSize(this.globalEventAdders.length);
                    for (var i = 0; i < this.globalEventAdders.length; i++) {
                        this.globalEventRemovers[i] = this.globalEventAdders[i]();
                    }
                };
                DefaultRenderView.prototype.dehydrate = function () {
                    if (!this.hydrated)
                        throw new exceptions_1.BaseException('The view is already dehydrated.');
                    for (var i = 0; i < this.globalEventRemovers.length; i++) {
                        this.globalEventRemovers[i]();
                    }
                    this.globalEventRemovers = null;
                    this.hydrated = false;
                };
                DefaultRenderView.prototype.setEventDispatcher = function (dispatcher) { this.eventDispatcher = dispatcher; };
                DefaultRenderView.prototype.dispatchRenderEvent = function (boundElementIndex, eventName, event) {
                    var allowDefaultBehavior = true;
                    if (lang_1.isPresent(this.eventDispatcher)) {
                        var locals = new collection_1.Map();
                        locals.set('$event', event);
                        allowDefaultBehavior =
                            this.eventDispatcher.dispatchRenderEvent(boundElementIndex, eventName, locals);
                    }
                    return allowDefaultBehavior;
                };
                return DefaultRenderView;
            })(api_1.RenderViewRef);
            exports_1("DefaultRenderView", DefaultRenderView);
        }
    }
});
//# sourceMappingURL=view.js.map