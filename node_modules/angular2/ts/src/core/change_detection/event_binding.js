System.register([], function(exports_1) {
    var EventBinding;
    return {
        setters:[],
        execute: function() {
            EventBinding = (function () {
                function EventBinding(eventName, elIndex, dirIndex, records) {
                    this.eventName = eventName;
                    this.elIndex = elIndex;
                    this.dirIndex = dirIndex;
                    this.records = records;
                }
                return EventBinding;
            })();
            exports_1("EventBinding", EventBinding);
        }
    }
});
//# sourceMappingURL=event_binding.js.map