System.register(['angular2/src/testing/e2e_util'], function(exports_1) {
    var e2e_util_1;
    function waitForElement(selector) {
        var EC = protractor.ExpectedConditions;
        // Waits for the element with id 'abc' to be present on the dom.
        browser.wait(EC.presenceOf($(selector)), 20000);
    }
    function waitForAlert() {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 1000);
    }
    return {
        setters:[
            function (e2e_util_1_1) {
                e2e_util_1 = e2e_util_1_1;
            }],
        execute: function() {
            describe('can deactivate example app', function () {
                afterEach(e2e_util_1.verifyNoBrowserErrors);
                var URL = 'angular2/examples/router/ts/can_deactivate/';
                it('should not navigate away when prompt is cancelled', function () {
                    browser.get(URL);
                    waitForElement('note-index-cmp');
                    element(by.css('#note-1-link')).click();
                    waitForElement('note-cmp');
                    browser.navigate().back();
                    waitForAlert();
                    browser.switchTo().alert().dismiss(); // Use to simulate cancel button
                    expect(element(by.css('note-cmp')).getText()).toContain('id: 1');
                });
                it('should navigate away when prompt is confirmed', function () {
                    browser.get(URL);
                    waitForElement('note-index-cmp');
                    element(by.css('#note-1-link')).click();
                    waitForElement('note-cmp');
                    browser.navigate().back();
                    waitForAlert();
                    browser.switchTo().alert().accept();
                    waitForElement('note-index-cmp');
                    expect(element(by.css('note-index-cmp')).getText()).toContain('Your Notes');
                });
            });
        }
    }
});
//# sourceMappingURL=can_deactivate_spec.js.map