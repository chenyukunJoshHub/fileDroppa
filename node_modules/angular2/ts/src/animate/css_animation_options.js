System.register([], function(exports_1) {
    var CssAnimationOptions;
    return {
        setters:[],
        execute: function() {
            CssAnimationOptions = (function () {
                function CssAnimationOptions() {
                    /** classes to be added to the element */
                    this.classesToAdd = [];
                    /** classes to be removed from the element */
                    this.classesToRemove = [];
                    /** classes to be added for the duration of the animation */
                    this.animationClasses = [];
                }
                return CssAnimationOptions;
            })();
            exports_1("CssAnimationOptions", CssAnimationOptions);
        }
    }
});
//# sourceMappingURL=css_animation_options.js.map