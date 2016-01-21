/**
 * @module
 * @description
 * Maps application URLs into application states, to support deep-linking and navigation.
 */
System.register(['./src/router/router', './src/router/router_outlet', './src/router/router_link', './src/router/instruction', './src/router/platform_location', './src/router/route_registry', './src/router/location_strategy', './src/router/hash_location_strategy', './src/router/path_location_strategy', './src/router/location', './src/router/route_config_decorator', './src/router/route_definition', './src/router/lifecycle_annotations', 'angular2/core', './src/facade/lang', 'angular2/src/facade/exceptions'], function(exports_1) {
    var platform_location_1, location_strategy_1, path_location_strategy_1, router_1, router_outlet_1, router_link_1, route_registry_1, location_1, core_1, lang_1, exceptions_1;
    var ROUTER_DIRECTIVES, ROUTER_PROVIDERS, ROUTER_BINDINGS;
    function routerFactory(registry, location, primaryComponent, appRef) {
        var rootRouter = new router_1.RootRouter(registry, location, primaryComponent);
        appRef.registerDisposeListener(function () { return rootRouter.dispose(); });
        return rootRouter;
    }
    function routerPrimaryComponentFactory(app) {
        if (app.componentTypes.length == 0) {
            throw new exceptions_1.BaseException("Bootstrap at least one component before injecting Router.");
        }
        return app.componentTypes[0];
    }
    var exportedNames_1 = {
        'ROUTER_DIRECTIVES': true,
        'ROUTER_PROVIDERS': true,
        'ROUTER_BINDINGS': true,
        'Router': true,
        'RouterOutlet': true,
        'RouterLink': true,
        'RouteParams': true,
        'RouteData': true,
        'PlatformLocation': true,
        'RouteRegistry': true,
        'ROUTER_PRIMARY_COMPONENT': true,
        'LocationStrategy': true,
        'APP_BASE_HREF': true,
        'HashLocationStrategy': true,
        'PathLocationStrategy': true,
        'Location': true,
        'CanActivate': true,
        'Instruction': true,
        'ComponentInstruction': true,
        'OpaqueToken': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (router_2_1) {
                exports_1({
                    "Router": router_2_1["Router"]
                });
                router_1 = router_2_1;
            },
            function (router_outlet_2_1) {
                exports_1({
                    "RouterOutlet": router_outlet_2_1["RouterOutlet"]
                });
                router_outlet_1 = router_outlet_2_1;
            },
            function (router_link_2_1) {
                exports_1({
                    "RouterLink": router_link_2_1["RouterLink"]
                });
                router_link_1 = router_link_2_1;
            },
            function (instruction_1_1) {
                exports_1({
                    "RouteParams": instruction_1_1["RouteParams"],
                    "RouteData": instruction_1_1["RouteData"]
                });
                exports_1({
                    "Instruction": instruction_1_1["Instruction"],
                    "ComponentInstruction": instruction_1_1["ComponentInstruction"]
                });
            },
            function (platform_location_2_1) {
                exports_1({
                    "PlatformLocation": platform_location_2_1["PlatformLocation"]
                });
                platform_location_1 = platform_location_2_1;
            },
            function (route_registry_2_1) {
                exports_1({
                    "RouteRegistry": route_registry_2_1["RouteRegistry"],
                    "ROUTER_PRIMARY_COMPONENT": route_registry_2_1["ROUTER_PRIMARY_COMPONENT"]
                });
                route_registry_1 = route_registry_2_1;
            },
            function (location_strategy_2_1) {
                exports_1({
                    "LocationStrategy": location_strategy_2_1["LocationStrategy"],
                    "APP_BASE_HREF": location_strategy_2_1["APP_BASE_HREF"]
                });
                location_strategy_1 = location_strategy_2_1;
            },
            function (hash_location_strategy_1_1) {
                exports_1({
                    "HashLocationStrategy": hash_location_strategy_1_1["HashLocationStrategy"]
                });
            },
            function (path_location_strategy_2_1) {
                exports_1({
                    "PathLocationStrategy": path_location_strategy_2_1["PathLocationStrategy"]
                });
                path_location_strategy_1 = path_location_strategy_2_1;
            },
            function (location_2_1) {
                exports_1({
                    "Location": location_2_1["Location"]
                });
                location_1 = location_2_1;
            },
            function (route_config_decorator_1_1) {
                exportStar_1(route_config_decorator_1_1);
            },
            function (route_definition_1_1) {
                exportStar_1(route_definition_1_1);
            },
            function (lifecycle_annotations_1_1) {
                exports_1({
                    "CanActivate": lifecycle_annotations_1_1["CanActivate"]
                });
            },
            function (core_2_1) {
                exports_1({
                    "OpaqueToken": core_2_1["OpaqueToken"]
                });
                core_1 = core_2_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            }],
        execute: function() {
            /**
             * A list of directives. To use the router directives like {@link RouterOutlet} and
             * {@link RouterLink}, add this to your `directives` array in the {@link View} decorator of your
             * component.
             *
             * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
             *
             * ```
             * import {Component} from 'angular2/core';
             * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
             *
             * @Component({directives: [ROUTER_DIRECTIVES]})
             * @RouteConfig([
             *  {...},
             * ])
             * class AppCmp {
             *    // ...
             * }
             *
             * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
             * ```
             */
            exports_1("ROUTER_DIRECTIVES", ROUTER_DIRECTIVES = lang_1.CONST_EXPR([router_outlet_1.RouterOutlet, router_link_1.RouterLink]));
            /**
             * A list of {@link Provider}s. To use the router, you must add this to your application.
             *
             * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
             *
             * ```
             * import {Component} from 'angular2/core';
             * import {
             *   ROUTER_DIRECTIVES,
             *   ROUTER_PROVIDERS,
             *   RouteConfig
             * } from 'angular2/router';
             *
             * @Component({directives: [ROUTER_DIRECTIVES]})
             * @RouteConfig([
             *  {...},
             * ])
             * class AppCmp {
             *   // ...
             * }
             *
             * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
             * ```
             */
            exports_1("ROUTER_PROVIDERS", ROUTER_PROVIDERS = lang_1.CONST_EXPR([
                route_registry_1.RouteRegistry,
                lang_1.CONST_EXPR(new core_1.Provider(location_strategy_1.LocationStrategy, { useClass: path_location_strategy_1.PathLocationStrategy })),
                platform_location_1.PlatformLocation,
                location_1.Location,
                lang_1.CONST_EXPR(new core_1.Provider(router_1.Router, {
                    useFactory: routerFactory,
                    deps: lang_1.CONST_EXPR([route_registry_1.RouteRegistry, location_1.Location, route_registry_1.ROUTER_PRIMARY_COMPONENT, core_1.ApplicationRef])
                })),
                lang_1.CONST_EXPR(new core_1.Provider(route_registry_1.ROUTER_PRIMARY_COMPONENT, { useFactory: routerPrimaryComponentFactory, deps: lang_1.CONST_EXPR([core_1.ApplicationRef]) }))
            ]));
            /**
             * Use {@link ROUTER_PROVIDERS} instead.
             *
             * @deprecated
             */
            exports_1("ROUTER_BINDINGS", ROUTER_BINDINGS = ROUTER_PROVIDERS);
        }
    }
});
//# sourceMappingURL=router.js.map