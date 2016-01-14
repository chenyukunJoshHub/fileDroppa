System.register(['angular2/core', 'angular2/testing', "../src/Directives/FileDroppa", 'angular2/platform/common_dom'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, testing_1, FileDroppa_1, common_dom_1;
    var TestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (FileDroppa_1_1) {
                FileDroppa_1 = FileDroppa_1_1;
            },
            function (common_dom_1_1) {
                common_dom_1 = common_dom_1_1;
            }],
        execute: function() {
            TestComponent = (function () {
                function TestComponent() {
                }
                TestComponent.prototype.fileUploaded = function (files) {
                };
                TestComponent = __decorate([
                    core_1.Component({
                        selector: 'header',
                        directives: [FileDroppa_1.FileDroppa],
                        template: "<div fileDroppa\n                        id=child\n                        (fileUploaded)=\"fileUploaded($event)\"\n                        [overCls]=\"'customDrop'\">\n                    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TestComponent);
                return TestComponent;
            })();
            exports_1("TestComponent", TestComponent);
            testing_1.describe('Test File Droppa Directive', function () {
                testing_1.it('should call onDrop', testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
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
            });
        }
    }
});
//# sourceMappingURL=fileDroppa.spec.js.map