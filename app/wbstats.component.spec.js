"use strict";
var testing_1 = require('@angular/core/testing');
var wbstats_component_1 = require('../app/wbstats.component');
testing_1.beforeEachProviders(function () { return [wbstats_component_1.WbstatsAppComponent]; });
testing_1.describe('App: Wbstats', function () {
    testing_1.it('should create the app', testing_1.inject([wbstats_component_1.WbstatsAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'wbstats works!\'', testing_1.inject([wbstats_component_1.WbstatsAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('wbstats works!');
    }));
});
//# sourceMappingURL=../wbstats.component.spec.js.map