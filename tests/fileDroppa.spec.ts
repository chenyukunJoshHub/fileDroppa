import {Component} from 'angular2/core';
import {
    it,
    describe,
    expect,
    inject,
    TestComponentBuilder,

} from 'angular2/testing';
import {FileDroppa} from "../src/Directives/FileDroppa";
import {By} from 'angular2/platform/common_dom';

@Component({
    selector: 'header',
    directives: [FileDroppa],
    template: `<div fileDroppa
                        id=child
                        (fileUploaded)="fileUploaded($event)"
                        [overCls]="'customDrop'">
                    </div>`
})
export class TestComponent {
    public fileUploaded(files) {
    }
}

describe('Test File Droppa Directive', () => {
    it('should call onDrop', inject([TestComponentBuilder], (tcb) => {
        return tcb.createAsync(TestComponent).then((fixture) => {
            fixture.detectChanges();
            spyOn(fixture.componentInstance, "fileUploaded");
            let el = fixture.debugElement.query(By.css('div#child'));
            el.triggerEventHandler('drop', {
                preventDefault(){},
                dataTransfer:{
                    files:[1,2,3],
                    items:[1,2,3]
                }
            });
            window.setTimeout(()=>{
                expect(fixture.componentInstance.fileUploaded).toHaveBeenCalledWith([1,2,3]);
            },300);
        });
    }));
});



                