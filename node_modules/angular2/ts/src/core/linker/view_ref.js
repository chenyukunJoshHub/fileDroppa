System.register(['angular2/src/facade/lang', 'angular2/src/facade/exceptions'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var lang_1, exceptions_1;
    var ViewRef, ViewRef_, ProtoViewRef, ProtoViewRef_;
    // This is a workaround for privacy in Dart as we don't have library parts
    function internalView(viewRef) {
        return viewRef._view;
    }
    exports_1("internalView", internalView);
    // This is a workaround for privacy in Dart as we don't have library parts
    function internalProtoView(protoViewRef) {
        return lang_1.isPresent(protoViewRef) ? protoViewRef._protoView : null;
    }
    exports_1("internalProtoView", internalProtoView);
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            }],
        execute: function() {
            /**
             * Represents an Angular View.
             *
             * <!-- TODO: move the next two paragraphs to the dev guide -->
             * A View is a fundamental building block of the application UI. It is the smallest grouping of
             * Elements which are created and destroyed together.
             *
             * Properties of elements in a View can change, but the structure (number and order) of elements in
             * a View cannot. Changing the structure of Elements can only be done by inserting, moving or
             * removing nested Views via a {@link ViewContainerRef}. Each View can contain many View Containers.
             * <!-- /TODO -->
             *
             * ### Example
             *
             * Given this template...
             *
             * ```
             * Count: {{items.length}}
             * <ul>
             *   <li *ngFor="var item of items">{{item}}</li>
             * </ul>
             * ```
             *
             * ... we have two {@link ProtoViewRef}s:
             *
             * Outer {@link ProtoViewRef}:
             * ```
             * Count: {{items.length}}
             * <ul>
             *   <template ngFor var-item [ngForOf]="items"></template>
             * </ul>
             * ```
             *
             * Inner {@link ProtoViewRef}:
             * ```
             *   <li>{{item}}</li>
             * ```
             *
             * Notice that the original template is broken down into two separate {@link ProtoViewRef}s.
             *
             * The outer/inner {@link ProtoViewRef}s are then assembled into views like so:
             *
             * ```
             * <!-- ViewRef: outer-0 -->
             * Count: 2
             * <ul>
             *   <template view-container-ref></template>
             *   <!-- ViewRef: inner-1 --><li>first</li><!-- /ViewRef: inner-1 -->
             *   <!-- ViewRef: inner-2 --><li>second</li><!-- /ViewRef: inner-2 -->
             * </ul>
             * <!-- /ViewRef: outer-0 -->
             * ```
             */
            ViewRef = (function () {
                function ViewRef() {
                }
                Object.defineProperty(ViewRef.prototype, "changeDetectorRef", {
                    get: function () { return exceptions_1.unimplemented(); },
                    set: function (value) {
                        exceptions_1.unimplemented(); // TODO: https://github.com/Microsoft/TypeScript/issues/12
                    },
                    enumerable: true,
                    configurable: true
                });
                return ViewRef;
            })();
            exports_1("ViewRef", ViewRef);
            ViewRef_ = (function (_super) {
                __extends(ViewRef_, _super);
                function ViewRef_(_view) {
                    _super.call(this);
                    this._changeDetectorRef = null;
                    this._view = _view;
                }
                Object.defineProperty(ViewRef_.prototype, "render", {
                    /**
                     * Return `RenderViewRef`
                     */
                    get: function () { return this._view.render; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ViewRef_.prototype, "renderFragment", {
                    /**
                     * Return `RenderFragmentRef`
                     */
                    get: function () { return this._view.renderFragment; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ViewRef_.prototype, "changeDetectorRef", {
                    /**
                     * Return `ChangeDetectorRef`
                     */
                    get: function () {
                        if (this._changeDetectorRef === null) {
                            this._changeDetectorRef = this._view.changeDetector.ref;
                        }
                        return this._changeDetectorRef;
                    },
                    enumerable: true,
                    configurable: true
                });
                ViewRef_.prototype.setLocal = function (variableName, value) { this._view.setLocal(variableName, value); };
                return ViewRef_;
            })(ViewRef);
            exports_1("ViewRef_", ViewRef_);
            /**
             * Represents an Angular ProtoView.
             *
             * A ProtoView is a prototypical {@link ViewRef View} that is the result of Template compilation and
             * is used by Angular to efficiently create an instance of this View based on the compiled Template.
             *
             * Most ProtoViews are created and used internally by Angular and you don't need to know about them,
             * except in advanced use-cases where you compile components yourself via the low-level
             * {@link Compiler#compileInHost} API.
             *
             *
             * ### Example
             *
             * Given this template:
             *
             * ```
             * Count: {{items.length}}
             * <ul>
             *   <li *ngFor="var item of items">{{item}}</li>
             * </ul>
             * ```
             *
             * Angular desugars and compiles the template into two ProtoViews:
             *
             * Outer ProtoView:
             * ```
             * Count: {{items.length}}
             * <ul>
             *   <template ngFor var-item [ngForOf]="items"></template>
             * </ul>
             * ```
             *
             * Inner ProtoView:
             * ```
             *   <li>{{item}}</li>
             * ```
             *
             * Notice that the original template is broken down into two separate ProtoViews.
             */
            ProtoViewRef = (function () {
                function ProtoViewRef() {
                }
                return ProtoViewRef;
            })();
            exports_1("ProtoViewRef", ProtoViewRef);
            ProtoViewRef_ = (function (_super) {
                __extends(ProtoViewRef_, _super);
                function ProtoViewRef_(_protoView) {
                    _super.call(this);
                    this._protoView = _protoView;
                }
                return ProtoViewRef_;
            })(ProtoViewRef);
            exports_1("ProtoViewRef_", ProtoViewRef_);
        }
    }
});
//# sourceMappingURL=view_ref.js.map