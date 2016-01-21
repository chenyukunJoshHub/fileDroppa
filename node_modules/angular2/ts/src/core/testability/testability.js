System.register(['angular2/src/core/di', 'angular2/src/facade/collection', 'angular2/src/facade/lang', 'angular2/src/facade/exceptions', '../zone/ng_zone', 'angular2/src/facade/async'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var di_1, collection_1, lang_1, exceptions_1, ng_zone_1, async_1;
    var Testability, TestabilityRegistry, _NoopGetTestability, _testabilityGetter;
    /**
     * Set the {@link GetTestability} implementation used by the Angular testing framework.
     */
    function setTestabilityGetter(getter) {
        _testabilityGetter = getter;
    }
    exports_1("setTestabilityGetter", setTestabilityGetter);
    return {
        setters:[
            function (di_1_1) {
                di_1 = di_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            },
            function (ng_zone_1_1) {
                ng_zone_1 = ng_zone_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            /**
             * The Testability service provides testing hooks that can be accessed from
             * the browser and by services such as Protractor. Each bootstrapped Angular
             * application on the page will have an instance of Testability.
             */
            Testability = (function () {
                function Testability(_ngZone) {
                    /** @internal */
                    this._pendingCount = 0;
                    /** @internal */
                    this._callbacks = [];
                    /** @internal */
                    this._isAngularEventPending = false;
                    this._watchAngularEvents(_ngZone);
                }
                /** @internal */
                Testability.prototype._watchAngularEvents = function (_ngZone) {
                    var _this = this;
                    async_1.ObservableWrapper.subscribe(_ngZone.onTurnStart, function (_) { _this._isAngularEventPending = true; });
                    _ngZone.runOutsideAngular(function () {
                        async_1.ObservableWrapper.subscribe(_ngZone.onEventDone, function (_) {
                            if (!_ngZone.hasPendingTimers) {
                                _this._isAngularEventPending = false;
                                _this._runCallbacksIfReady();
                            }
                        });
                    });
                };
                Testability.prototype.increasePendingRequestCount = function () {
                    this._pendingCount += 1;
                    return this._pendingCount;
                };
                Testability.prototype.decreasePendingRequestCount = function () {
                    this._pendingCount -= 1;
                    if (this._pendingCount < 0) {
                        throw new exceptions_1.BaseException('pending async requests below zero');
                    }
                    this._runCallbacksIfReady();
                    return this._pendingCount;
                };
                Testability.prototype.isStable = function () { return this._pendingCount == 0 && !this._isAngularEventPending; };
                /** @internal */
                Testability.prototype._runCallbacksIfReady = function () {
                    var _this = this;
                    if (!this.isStable()) {
                        return; // Not ready
                    }
                    // Schedules the call backs in a new frame so that it is always async.
                    async_1.PromiseWrapper.resolve(null).then(function (_) {
                        while (_this._callbacks.length !== 0) {
                            (_this._callbacks.pop())();
                        }
                    });
                };
                Testability.prototype.whenStable = function (callback) {
                    this._callbacks.push(callback);
                    this._runCallbacksIfReady();
                };
                Testability.prototype.getPendingRequestCount = function () { return this._pendingCount; };
                // This only accounts for ngZone, and not pending counts. Use `whenStable` to
                // check for stability.
                Testability.prototype.isAngularEventPending = function () { return this._isAngularEventPending; };
                Testability.prototype.findBindings = function (using, provider, exactMatch) {
                    // TODO(juliemr): implement.
                    return [];
                };
                Testability.prototype.findProviders = function (using, provider, exactMatch) {
                    // TODO(juliemr): implement.
                    return [];
                };
                Testability = __decorate([
                    di_1.Injectable(), 
                    __metadata('design:paramtypes', [ng_zone_1.NgZone])
                ], Testability);
                return Testability;
            })();
            exports_1("Testability", Testability);
            /**
             * A global registry of {@link Testability} instances for specific elements.
             */
            TestabilityRegistry = (function () {
                function TestabilityRegistry() {
                    /** @internal */
                    this._applications = new collection_1.Map();
                    _testabilityGetter.addToWindow(this);
                }
                TestabilityRegistry.prototype.registerApplication = function (token, testability) {
                    this._applications.set(token, testability);
                };
                TestabilityRegistry.prototype.getTestability = function (elem) { return this._applications.get(elem); };
                TestabilityRegistry.prototype.getAllTestabilities = function () { return collection_1.MapWrapper.values(this._applications); };
                TestabilityRegistry.prototype.findTestabilityInTree = function (elem, findInAncestors) {
                    if (findInAncestors === void 0) { findInAncestors = true; }
                    return _testabilityGetter.findTestabilityInTree(this, elem, findInAncestors);
                };
                TestabilityRegistry = __decorate([
                    di_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TestabilityRegistry);
                return TestabilityRegistry;
            })();
            exports_1("TestabilityRegistry", TestabilityRegistry);
            _NoopGetTestability = (function () {
                function _NoopGetTestability() {
                }
                _NoopGetTestability.prototype.addToWindow = function (registry) { };
                _NoopGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
                    return null;
                };
                _NoopGetTestability = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [])
                ], _NoopGetTestability);
                return _NoopGetTestability;
            })();
            _testabilityGetter = lang_1.CONST_EXPR(new _NoopGetTestability());
        }
    }
});
//# sourceMappingURL=testability.js.map