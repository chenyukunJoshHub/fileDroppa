import {
    xdescribe,
    inject,
    TestComponentBuilder,
    beforeEachProviders
} from 'angular2/testing';

import {Component, PLATFORM_DIRECTIVES, provide} from 'angular2/core';

import {
    COMMON_DIRECTIVES,
} from 'angular2/common';

import {FileDroppa} from "../../src/Directives/FileDroppa";

@Component({
    template: '<div></div>'
})
class TestComponent {
}
//xdescribe('true===true', inject([FileDroppa], (componentBuilder: TestComponentBuilder) => {
//    componentBuilder.createAsync(FileDroppa).then((fixture) => {
//        fixture.detectChanges();
//
//        let compiled = fixture.debugElement.nativeElement;
//
//        expect(compiled).toBeDefined();
//    });
//}));

describe('some component', () => {
    it("true", ()=>{
        expect(true).toEqual(true);
    })
});
