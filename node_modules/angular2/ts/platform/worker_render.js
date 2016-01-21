System.register(['angular2/src/platform/worker_render_common', 'angular2/src/platform/worker_render', '../src/web_workers/shared/client_message_broker', '../src/web_workers/shared/service_message_broker', '../src/web_workers/shared/serializer', '../src/web_workers/shared/message_bus'], function(exports_1) {
    var exportedNames_1 = {
        'WORKER_SCRIPT': true,
        'WORKER_RENDER_PLATFORM': true,
        'initializeGenericWorkerRenderer': true,
        'WORKER_RENDER_APP_COMMON': true,
        'ClientMessageBroker': true,
        'ClientMessageBrokerFactory': true,
        'FnArg': true,
        'UiArguments': true,
        'ReceivedMessage': true,
        'ServiceMessageBroker': true,
        'ServiceMessageBrokerFactory': true,
        'PRIMITIVE': true
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
            function (worker_render_common_1_1) {
                exports_1({
                    "WORKER_SCRIPT": worker_render_common_1_1["WORKER_SCRIPT"],
                    "WORKER_RENDER_PLATFORM": worker_render_common_1_1["WORKER_RENDER_PLATFORM"],
                    "initializeGenericWorkerRenderer": worker_render_common_1_1["initializeGenericWorkerRenderer"],
                    "WORKER_RENDER_APP_COMMON": worker_render_common_1_1["WORKER_RENDER_APP_COMMON"]
                });
            },
            function (worker_render_1_1) {
                exportStar_1(worker_render_1_1);
            },
            function (client_message_broker_1_1) {
                exports_1({
                    "ClientMessageBroker": client_message_broker_1_1["ClientMessageBroker"],
                    "ClientMessageBrokerFactory": client_message_broker_1_1["ClientMessageBrokerFactory"],
                    "FnArg": client_message_broker_1_1["FnArg"],
                    "UiArguments": client_message_broker_1_1["UiArguments"]
                });
            },
            function (service_message_broker_1_1) {
                exports_1({
                    "ReceivedMessage": service_message_broker_1_1["ReceivedMessage"],
                    "ServiceMessageBroker": service_message_broker_1_1["ServiceMessageBroker"],
                    "ServiceMessageBrokerFactory": service_message_broker_1_1["ServiceMessageBrokerFactory"]
                });
            },
            function (serializer_1_1) {
                exports_1({
                    "PRIMITIVE": serializer_1_1["PRIMITIVE"]
                });
            },
            function (message_bus_1_1) {
                exportStar_1(message_bus_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=worker_render.js.map