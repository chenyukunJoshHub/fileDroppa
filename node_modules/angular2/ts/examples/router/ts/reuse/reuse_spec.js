System.register(['angular2/src/testing/e2e_util'], function(exports_1) {
    var e2e_util_1;
    function waitForElement(selector) {
        var EC = protractor.ExpectedConditions;
        // Waits for the element with id 'abc' to be present on the dom.
        browser.wait(EC.presenceOf($(selector)), 20000);
    }
    return {
        setters:[
            function (e2e_util_1_1) {
                e2e_util_1 = e2e_util_1_1;
            }],
        execute: function() {
            describe('reuse example app', function () {
                afterEach(e2e_util_1.verifyNoBrowserErrors);
                var URL = 'angular2/examples/router/ts/reuse/';
                it('should build a link which points to the detail page', function () {
                    browser.get(URL);
                    waitForElement('my-cmp');
                    element(by.css('#naomi-link')).click();
                    waitForElement('my-cmp');
                    expect(browser.getCurrentUrl()).toMatch(/\/naomi$/);
                    // type something into input
                    element(by.css('#message')).sendKeys('long time no see!');
                    // navigate to Brad
                    element(by.css('#brad-link')).click();
                    waitForElement('my-cmp');
                    expect(browser.getCurrentUrl()).toMatch(/\/brad$/);
                    // check that typed input is the same
                    expect(element(by.css('#message')).getAttribute('value')).toEqual('long time no see!');
                });
            });
        }
    }
});
//# sourceMappingURL=reuse_spec.js.map