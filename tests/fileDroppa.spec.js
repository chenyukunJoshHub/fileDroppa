var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var testing_1 = require('angular2/testing');
var FileDroppa_1 = require("../src/Directives/FileDroppa");
var common_dom_1 = require('angular2/platform/common_dom');
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.fileUploaded = function (files) {
    };
    TestComponent = __decorate([
        core_1.Component({
            selector: 'body',
            directives: [FileDroppa_1.FileDroppa],
            template: "<div fileDroppa\n                id=child\n                (fileUploaded)=\"fileUploaded($event)\">\n            </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
})();
exports.TestComponent = TestComponent;
testing_1.describe('Test File Droppa Directive', function () {
    testing_1.it('should call onDrop', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
        return tcb.createAsync(TestComponent).then(function (fixture) {
            fixture.detectChanges();
            spyOn(fixture.componentInstance, "fileUploaded");
            var el = fixture.debugElement.query(common_dom_1.By.css('div#child'));
            el.triggerEventHandler('drop', {
                preventDefault: function () { },
                dataTransfer: {
                    files: [1, 2, 3],
                    items: [1, 2, 3]
                }
            });
            window.setTimeout(function () {
                testing_1.expect(fixture.componentInstance.fileUploaded).toHaveBeenCalledWith([1, 2, 3]);
            }, 300);
        });
    }));
    testing_1.it('build hidden input', testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
        return tcb.createAsync(TestComponent).then(function (fixture) {
            testing_1.expect(document.querySelector("input[type=\"file\"]._hiddenInputClassName")).toBeTruthy();
        });
    }));
});
//# sourceMappingURL=fileDroppa.spec.js.map