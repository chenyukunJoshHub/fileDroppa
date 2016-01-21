System.register([], function(exports_1) {
    var EVENT_TARGET_SEPARATOR, EventConfig;
    return {
        setters:[],
        execute: function() {
            exports_1("EVENT_TARGET_SEPARATOR", EVENT_TARGET_SEPARATOR = ':');
            EventConfig = (function () {
                function EventConfig(fieldName, eventName, isLongForm) {
                    this.fieldName = fieldName;
                    this.eventName = eventName;
                    this.isLongForm = isLongForm;
                }
                EventConfig.parse = function (eventConfig) {
                    var fieldName = eventConfig, eventName = eventConfig, isLongForm = false;
                    var separatorIdx = eventConfig.indexOf(EVENT_TARGET_SEPARATOR);
                    if (separatorIdx > -1) {
                        // long format: 'fieldName: eventName'
                        fieldName = eventConfig.substring(0, separatorIdx).trim();
                        eventName = eventConfig.substring(separatorIdx + 1).trim();
                        isLongForm = true;
                    }
                    return new EventConfig(fieldName, eventName, isLongForm);
                };
                EventConfig.prototype.getFullName = function () {
                    return this.isLongForm ? "" + this.fieldName + EVENT_TARGET_SEPARATOR + this.eventName :
                        this.eventName;
                };
                return EventConfig;
            })();
            exports_1("EventConfig", EventConfig);
        }
    }
});
//# sourceMappingURL=event_config.js.map