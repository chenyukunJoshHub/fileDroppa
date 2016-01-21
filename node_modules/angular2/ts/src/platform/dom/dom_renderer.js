System.register(['angular2/src/core/di', 'angular2/src/animate/animation_builder', 'angular2/src/facade/lang', 'angular2/src/facade/exceptions', './shared_styles_host', 'angular2/src/core/profile/profile', 'angular2/core', './events/event_manager', './dom_tokens', 'angular2/src/core/render/view_factory', 'angular2/src/core/render/view', 'angular2/src/core/metadata', 'angular2/src/platform/dom/dom_adapter', './util'], function(exports_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var di_1, animation_builder_1, lang_1, exceptions_1, shared_styles_host_1, profile_1, core_1, event_manager_1, dom_tokens_1, view_factory_1, view_1, metadata_1, dom_adapter_1, util_1;
    var NAMESPACE_URIS, TEMPLATE_COMMENT_TEXT, TEMPLATE_BINDINGS_EXP, DomRenderer, DomRenderer_, NS_PREFIX_RE;
    function resolveInternalDomView(viewRef) {
        return viewRef;
    }
    function resolveInternalDomFragment(fragmentRef) {
        return fragmentRef.nodes;
    }
    function moveNodesAfterSibling(sibling, nodes) {
        var parent = dom_adapter_1.DOM.parentElement(sibling);
        if (nodes.length > 0 && lang_1.isPresent(parent)) {
            var nextSibling = dom_adapter_1.DOM.nextSibling(sibling);
            if (lang_1.isPresent(nextSibling)) {
                for (var i = 0; i < nodes.length; i++) {
                    dom_adapter_1.DOM.insertBefore(nextSibling, nodes[i]);
                }
            }
            else {
                for (var i = 0; i < nodes.length; i++) {
                    dom_adapter_1.DOM.appendChild(parent, nodes[i]);
                }
            }
        }
    }
    function decoratePreventDefault(eventHandler) {
        return function (event) {
            var allowDefaultBehavior = eventHandler(event);
            if (!allowDefaultBehavior) {
                // TODO(tbosch): move preventDefault into event plugins...
                dom_adapter_1.DOM.preventDefault(event);
            }
        };
    }
    function splitNamespace(name) {
        if (name[0] != '@') {
            return [null, name];
        }
        var match = lang_1.RegExpWrapper.firstMatch(NS_PREFIX_RE, name);
        return [match[1], match[2]];
    }
    return {
        setters:[
            function (di_1_1) {
                di_1 = di_1_1;
            },
            function (animation_builder_1_1) {
                animation_builder_1 = animation_builder_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            },
            function (shared_styles_host_1_1) {
                shared_styles_host_1 = shared_styles_host_1_1;
            },
            function (profile_1_1) {
                profile_1 = profile_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (event_manager_1_1) {
                event_manager_1 = event_manager_1_1;
            },
            function (dom_tokens_1_1) {
                dom_tokens_1 = dom_tokens_1_1;
            },
            function (view_factory_1_1) {
                view_factory_1 = view_factory_1_1;
            },
            function (view_1_1) {
                view_1 = view_1_1;
            },
            function (metadata_1_1) {
                metadata_1 = metadata_1_1;
            },
            function (dom_adapter_1_1) {
                dom_adapter_1 = dom_adapter_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            NAMESPACE_URIS = lang_1.CONST_EXPR({ 'xlink': 'http://www.w3.org/1999/xlink', 'svg': 'http://www.w3.org/2000/svg' });
            TEMPLATE_COMMENT_TEXT = 'template bindings={}';
            TEMPLATE_BINDINGS_EXP = /^template bindings=(.*)$/g;
            DomRenderer = (function (_super) {
                __extends(DomRenderer, _super);
                function DomRenderer() {
                    _super.apply(this, arguments);
                }
                DomRenderer.prototype.getNativeElementSync = function (location) {
                    return resolveInternalDomView(location.renderView).boundElements[location.boundElementIndex];
                };
                DomRenderer.prototype.getRootNodes = function (fragment) { return resolveInternalDomFragment(fragment); };
                DomRenderer.prototype.attachFragmentAfterFragment = function (previousFragmentRef, fragmentRef) {
                    var previousFragmentNodes = resolveInternalDomFragment(previousFragmentRef);
                    if (previousFragmentNodes.length > 0) {
                        var sibling = previousFragmentNodes[previousFragmentNodes.length - 1];
                        var nodes = resolveInternalDomFragment(fragmentRef);
                        moveNodesAfterSibling(sibling, nodes);
                        this.animateNodesEnter(nodes);
                    }
                };
                /**
                 * Iterates through all nodes being added to the DOM and animates them if necessary
                 * @param nodes
                 */
                DomRenderer.prototype.animateNodesEnter = function (nodes) {
                    for (var i = 0; i < nodes.length; i++)
                        this.animateNodeEnter(nodes[i]);
                };
                DomRenderer.prototype.attachFragmentAfterElement = function (elementRef, fragmentRef) {
                    var parentView = resolveInternalDomView(elementRef.renderView);
                    var element = parentView.boundElements[elementRef.boundElementIndex];
                    var nodes = resolveInternalDomFragment(fragmentRef);
                    moveNodesAfterSibling(element, nodes);
                    this.animateNodesEnter(nodes);
                };
                DomRenderer.prototype.hydrateView = function (viewRef) { resolveInternalDomView(viewRef).hydrate(); };
                DomRenderer.prototype.dehydrateView = function (viewRef) { resolveInternalDomView(viewRef).dehydrate(); };
                DomRenderer.prototype.createTemplateAnchor = function (attrNameAndValues) {
                    return dom_adapter_1.DOM.createComment(TEMPLATE_COMMENT_TEXT);
                };
                DomRenderer.prototype.createText = function (value) { return dom_adapter_1.DOM.createTextNode(lang_1.isPresent(value) ? value : ''); };
                DomRenderer.prototype.appendChild = function (parent, child) { dom_adapter_1.DOM.appendChild(parent, child); };
                DomRenderer.prototype.setElementProperty = function (location, propertyName, propertyValue) {
                    var view = resolveInternalDomView(location.renderView);
                    dom_adapter_1.DOM.setProperty(view.boundElements[location.boundElementIndex], propertyName, propertyValue);
                };
                DomRenderer.prototype.setElementAttribute = function (location, attributeName, attributeValue) {
                    var view = resolveInternalDomView(location.renderView);
                    var element = view.boundElements[location.boundElementIndex];
                    if (lang_1.isPresent(attributeValue)) {
                        dom_adapter_1.DOM.setAttribute(element, attributeName, lang_1.stringify(attributeValue));
                    }
                    else {
                        dom_adapter_1.DOM.removeAttribute(element, attributeName);
                    }
                };
                /**
                 * Used only in debug mode to serialize property changes to comment nodes,
                 * such as <template> placeholders.
                 */
                DomRenderer.prototype.setBindingDebugInfo = function (location, propertyName, propertyValue) {
                    var view = resolveInternalDomView(location.renderView);
                    var element = view.boundElements[location.boundElementIndex];
                    var dashCasedPropertyName = util_1.camelCaseToDashCase(propertyName);
                    if (dom_adapter_1.DOM.isCommentNode(element)) {
                        var existingBindings = lang_1.RegExpWrapper.firstMatch(TEMPLATE_BINDINGS_EXP, lang_1.StringWrapper.replaceAll(dom_adapter_1.DOM.getText(element), /\n/g, ''));
                        var parsedBindings = lang_1.Json.parse(existingBindings[1]);
                        parsedBindings[dashCasedPropertyName] = propertyValue;
                        dom_adapter_1.DOM.setText(element, lang_1.StringWrapper.replace(TEMPLATE_COMMENT_TEXT, '{}', lang_1.Json.stringify(parsedBindings)));
                    }
                    else {
                        this.setElementAttribute(location, propertyName, propertyValue);
                    }
                };
                DomRenderer.prototype.setElementClass = function (location, className, isAdd) {
                    var view = resolveInternalDomView(location.renderView);
                    var element = view.boundElements[location.boundElementIndex];
                    if (isAdd) {
                        dom_adapter_1.DOM.addClass(element, className);
                    }
                    else {
                        dom_adapter_1.DOM.removeClass(element, className);
                    }
                };
                DomRenderer.prototype.setElementStyle = function (location, styleName, styleValue) {
                    var view = resolveInternalDomView(location.renderView);
                    var element = view.boundElements[location.boundElementIndex];
                    if (lang_1.isPresent(styleValue)) {
                        dom_adapter_1.DOM.setStyle(element, styleName, lang_1.stringify(styleValue));
                    }
                    else {
                        dom_adapter_1.DOM.removeStyle(element, styleName);
                    }
                };
                DomRenderer.prototype.invokeElementMethod = function (location, methodName, args) {
                    var view = resolveInternalDomView(location.renderView);
                    var element = view.boundElements[location.boundElementIndex];
                    dom_adapter_1.DOM.invoke(element, methodName, args);
                };
                DomRenderer.prototype.setText = function (viewRef, textNodeIndex, text) {
                    var view = resolveInternalDomView(viewRef);
                    dom_adapter_1.DOM.setText(view.boundTextNodes[textNodeIndex], text);
                };
                DomRenderer.prototype.setEventDispatcher = function (viewRef, dispatcher) {
                    resolveInternalDomView(viewRef).setEventDispatcher(dispatcher);
                };
                return DomRenderer;
            })(core_1.Renderer);
            exports_1("DomRenderer", DomRenderer);
            DomRenderer_ = (function (_super) {
                __extends(DomRenderer_, _super);
                function DomRenderer_(_eventManager, _domSharedStylesHost, _animate, document) {
                    _super.call(this);
                    this._eventManager = _eventManager;
                    this._domSharedStylesHost = _domSharedStylesHost;
                    this._animate = _animate;
                    this._componentTpls = new Map();
                    /** @internal */
                    this._createRootHostViewScope = profile_1.wtfCreateScope('DomRenderer#createRootHostView()');
                    /** @internal */
                    this._createViewScope = profile_1.wtfCreateScope('DomRenderer#createView()');
                    /** @internal */
                    this._detachFragmentScope = profile_1.wtfCreateScope('DomRenderer#detachFragment()');
                    this._document = document;
                }
                DomRenderer_.prototype.registerComponentTemplate = function (template) {
                    this._componentTpls.set(template.id, template);
                    if (template.encapsulation !== metadata_1.ViewEncapsulation.Native) {
                        var encapsulatedStyles = view_factory_1.encapsulateStyles(template);
                        this._domSharedStylesHost.addStyles(encapsulatedStyles);
                    }
                };
                DomRenderer_.prototype.createProtoView = function (componentTemplateId, cmds) {
                    return new view_1.DefaultProtoViewRef(this._componentTpls.get(componentTemplateId), cmds);
                };
                DomRenderer_.prototype.resolveComponentTemplate = function (templateId) {
                    return this._componentTpls.get(templateId);
                };
                DomRenderer_.prototype.createRootHostView = function (hostProtoViewRef, fragmentCount, hostElementSelector) {
                    var s = this._createRootHostViewScope();
                    var element = dom_adapter_1.DOM.querySelector(this._document, hostElementSelector);
                    if (lang_1.isBlank(element)) {
                        profile_1.wtfLeave(s);
                        throw new exceptions_1.BaseException("The selector \"" + hostElementSelector + "\" did not match any elements");
                    }
                    return profile_1.wtfLeave(s, this._createView(hostProtoViewRef, element));
                };
                DomRenderer_.prototype.createView = function (protoViewRef, fragmentCount) {
                    var s = this._createViewScope();
                    return profile_1.wtfLeave(s, this._createView(protoViewRef, null));
                };
                DomRenderer_.prototype._createView = function (protoViewRef, inplaceElement) {
                    var dpvr = protoViewRef;
                    var view = view_factory_1.createRenderView(dpvr.template, dpvr.cmds, inplaceElement, this);
                    var sdRoots = view.nativeShadowRoots;
                    for (var i = 0; i < sdRoots.length; i++) {
                        this._domSharedStylesHost.addHost(sdRoots[i]);
                    }
                    return new core_1.RenderViewWithFragments(view, view.fragments);
                };
                DomRenderer_.prototype.destroyView = function (viewRef) {
                    var view = viewRef;
                    var sdRoots = view.nativeShadowRoots;
                    for (var i = 0; i < sdRoots.length; i++) {
                        this._domSharedStylesHost.removeHost(sdRoots[i]);
                    }
                };
                DomRenderer_.prototype.animateNodeEnter = function (node) {
                    if (dom_adapter_1.DOM.isElementNode(node) && dom_adapter_1.DOM.hasClass(node, 'ng-animate')) {
                        dom_adapter_1.DOM.addClass(node, 'ng-enter');
                        this._animate.css()
                            .addAnimationClass('ng-enter-active')
                            .start(node)
                            .onComplete(function () { dom_adapter_1.DOM.removeClass(node, 'ng-enter'); });
                    }
                };
                DomRenderer_.prototype.animateNodeLeave = function (node) {
                    if (dom_adapter_1.DOM.isElementNode(node) && dom_adapter_1.DOM.hasClass(node, 'ng-animate')) {
                        dom_adapter_1.DOM.addClass(node, 'ng-leave');
                        this._animate.css()
                            .addAnimationClass('ng-leave-active')
                            .start(node)
                            .onComplete(function () {
                            dom_adapter_1.DOM.removeClass(node, 'ng-leave');
                            dom_adapter_1.DOM.remove(node);
                        });
                    }
                    else {
                        dom_adapter_1.DOM.remove(node);
                    }
                };
                DomRenderer_.prototype.detachFragment = function (fragmentRef) {
                    var s = this._detachFragmentScope();
                    var fragmentNodes = resolveInternalDomFragment(fragmentRef);
                    for (var i = 0; i < fragmentNodes.length; i++) {
                        this.animateNodeLeave(fragmentNodes[i]);
                    }
                    profile_1.wtfLeave(s);
                };
                DomRenderer_.prototype.createElement = function (name, attrNameAndValues) {
                    var nsAndName = splitNamespace(name);
                    var el = lang_1.isPresent(nsAndName[0]) ?
                        dom_adapter_1.DOM.createElementNS(NAMESPACE_URIS[nsAndName[0]], nsAndName[1]) :
                        dom_adapter_1.DOM.createElement(nsAndName[1]);
                    this._setAttributes(el, attrNameAndValues);
                    return el;
                };
                DomRenderer_.prototype.mergeElement = function (existing, attrNameAndValues) {
                    dom_adapter_1.DOM.clearNodes(existing);
                    this._setAttributes(existing, attrNameAndValues);
                };
                DomRenderer_.prototype._setAttributes = function (node, attrNameAndValues) {
                    for (var attrIdx = 0; attrIdx < attrNameAndValues.length; attrIdx += 2) {
                        var attrNs;
                        var attrName = attrNameAndValues[attrIdx];
                        var nsAndName = splitNamespace(attrName);
                        if (lang_1.isPresent(nsAndName[0])) {
                            attrName = nsAndName[0] + ':' + nsAndName[1];
                            attrNs = NAMESPACE_URIS[nsAndName[0]];
                        }
                        var attrValue = attrNameAndValues[attrIdx + 1];
                        if (lang_1.isPresent(attrNs)) {
                            dom_adapter_1.DOM.setAttributeNS(node, attrNs, attrName, attrValue);
                        }
                        else {
                            dom_adapter_1.DOM.setAttribute(node, nsAndName[1], attrValue);
                        }
                    }
                };
                DomRenderer_.prototype.createRootContentInsertionPoint = function () {
                    return dom_adapter_1.DOM.createComment('root-content-insertion-point');
                };
                DomRenderer_.prototype.createShadowRoot = function (host, templateId) {
                    var sr = dom_adapter_1.DOM.createShadowRoot(host);
                    var tpl = this._componentTpls.get(templateId);
                    for (var i = 0; i < tpl.styles.length; i++) {
                        dom_adapter_1.DOM.appendChild(sr, dom_adapter_1.DOM.createStyleElement(tpl.styles[i]));
                    }
                    return sr;
                };
                DomRenderer_.prototype.on = function (element, eventName, callback) {
                    this._eventManager.addEventListener(element, eventName, decoratePreventDefault(callback));
                };
                DomRenderer_.prototype.globalOn = function (target, eventName, callback) {
                    return this._eventManager.addGlobalEventListener(target, eventName, decoratePreventDefault(callback));
                };
                DomRenderer_ = __decorate([
                    di_1.Injectable(),
                    __param(3, di_1.Inject(dom_tokens_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [event_manager_1.EventManager, shared_styles_host_1.DomSharedStylesHost, animation_builder_1.AnimationBuilder, Object])
                ], DomRenderer_);
                return DomRenderer_;
            })(DomRenderer);
            exports_1("DomRenderer_", DomRenderer_);
            NS_PREFIX_RE = /^@([^:]+):(.+)/g;
        }
    }
});
//# sourceMappingURL=dom_renderer.js.map