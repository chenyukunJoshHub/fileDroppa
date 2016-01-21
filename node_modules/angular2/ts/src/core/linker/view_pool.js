System.register(['angular2/src/core/di', 'angular2/src/facade/lang', 'angular2/src/facade/collection'], function(exports_1) {
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
    var di_1, lang_1, collection_1;
    var APP_VIEW_POOL_CAPACITY, AppViewPool;
    return {
        setters:[
            function (di_1_1) {
                di_1 = di_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            }],
        execute: function() {
            exports_1("APP_VIEW_POOL_CAPACITY", APP_VIEW_POOL_CAPACITY = lang_1.CONST_EXPR(new di_1.OpaqueToken('AppViewPool.viewPoolCapacity')));
            AppViewPool = (function () {
                function AppViewPool(poolCapacityPerProtoView) {
                    /** @internal */
                    this._pooledViewsPerProtoView = new collection_1.Map();
                    this._poolCapacityPerProtoView = poolCapacityPerProtoView;
                }
                AppViewPool.prototype.getView = function (protoView) {
                    var pooledViews = this._pooledViewsPerProtoView.get(protoView);
                    if (lang_1.isPresent(pooledViews) && pooledViews.length > 0) {
                        return pooledViews.pop();
                    }
                    return null;
                };
                AppViewPool.prototype.returnView = function (view) {
                    var protoView = view.proto;
                    var pooledViews = this._pooledViewsPerProtoView.get(protoView);
                    if (lang_1.isBlank(pooledViews)) {
                        pooledViews = [];
                        this._pooledViewsPerProtoView.set(protoView, pooledViews);
                    }
                    var haveRemainingCapacity = pooledViews.length < this._poolCapacityPerProtoView;
                    if (haveRemainingCapacity) {
                        pooledViews.push(view);
                    }
                    return haveRemainingCapacity;
                };
                AppViewPool = __decorate([
                    di_1.Injectable(),
                    __param(0, di_1.Inject(APP_VIEW_POOL_CAPACITY)), 
                    __metadata('design:paramtypes', [Object])
                ], AppViewPool);
                return AppViewPool;
            })();
            exports_1("AppViewPool", AppViewPool);
        }
    }
});
//# sourceMappingURL=view_pool.js.map