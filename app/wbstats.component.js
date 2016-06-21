"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var tabs_1 = require('@angular2-material/tabs');
var sidenav_1 = require('@angular2-material/sidenav');
var toolbar_1 = require('@angular2-material/toolbar');
var icon_1 = require('@angular2-material/icon');
var indicatorlist_1 = require('./indicatorlist');
var indicatordata_1 = require('./indicatordata');
var dropdown_1 = require('./dropdown');
var WbstatsAppComponent = (function () {
    function WbstatsAppComponent() {
        this.title = 'World Bank Statistics!';
        this.indicatorCode = 'SP.POP.TOTL';
        this.indicatorName = 'Population, total';
        this.year = "2000";
        this.dropdownValues = [{ value: "2000", label: "2000" }, { value: "2001", label: "2001" }, { value: "2002", label: "2002" },
            { value: "2003", label: "2003" }, { value: "2004", label: "2004" }, { value: "2005", label: "2005" },
            { value: "2006", label: "2006" }, { value: "2007", label: "2007" }, { value: "2008", label: "2008" },
            { value: "2009", label: "2009" }, { value: "2010", label: "2010" }, { value: "2011", label: "2011" }, { value: "2012", label: "2012" }
        ];
    }
    WbstatsAppComponent.prototype.action = function (val) {
        console.log('Testing..' + val);
        this.year = val;
    };
    WbstatsAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wbstats-app',
            templateUrl: 'wbstats.component.html',
            styleUrls: ['wbstats.component.css'],
            directives: [card_1.MD_CARD_DIRECTIVES, button_1.MD_BUTTON_DIRECTIVES, tabs_1.MD_TABS_DIRECTIVES, sidenav_1.MD_SIDENAV_DIRECTIVES, toolbar_1.MD_TOOLBAR_DIRECTIVES, icon_1.MD_ICON_DIRECTIVES, indicatorlist_1.IndicatorlistComponent, indicatordata_1.IndicatordataComponent, dropdown_1.DropdownComponent],
            providers: [icon_1.MdIconRegistry],
        }), 
        __metadata('design:paramtypes', [])
    ], WbstatsAppComponent);
    return WbstatsAppComponent;
}());
exports.WbstatsAppComponent = WbstatsAppComponent;
//# sourceMappingURL=../wbstats.component.js.map