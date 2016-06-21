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
var grid_list_1 = require('@angular2-material/grid-list');
var list_1 = require('@angular2-material/list');
var card_1 = require('@angular2-material/card');
var tabs_1 = require('@angular2-material/tabs');
var data_service_1 = require('../data.service');
//import {nvD3} from '//cdn.rawgit.com/krispo/ng2-nvd3/v1.1.0/lib/ng2-nvd3.ts';
//import {nvD3} from 'ng2-nvd3';
//declare let d3: any;
var IndicatordataComponent = (function () {
    function IndicatordataComponent(dataService) {
        this.dataService = dataService;
    }
    IndicatordataComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.indCode);
        this.dataService.getResultData(this.indCode, this.year).subscribe(function (d) {
            _this.results = d;
            //console.log(d);
        });
    };
    IndicatordataComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log(this.indCode);
        this.dataService.getResultData(this.indCode, this.year).subscribe(function (d) {
            _this.results = d;
            //console.log(d);
        });
    };
    IndicatordataComponent.prototype.ngAfterViewInit = function () {
        //console.log(this.chartC.nativeElement.id);
    };
    IndicatordataComponent = __decorate([
        core_1.Component({
            selector: 'app-indicatordata',
            templateUrl: 'app/indicatordata/indicatordata.component.html',
            styleUrls: ['app/indicatordata/indicatordata.component.css'],
            providers: [data_service_1.DataService],
            inputs: ['indCode', 'year'],
            directives: [grid_list_1.MD_GRID_LIST_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, card_1.MD_CARD_DIRECTIVES, tabs_1.MD_TABS_DIRECTIVES,],
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], IndicatordataComponent);
    return IndicatordataComponent;
}());
exports.IndicatordataComponent = IndicatordataComponent;
//# sourceMappingURL=../../indicatordata.component.js.map