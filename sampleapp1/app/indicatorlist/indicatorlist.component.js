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
var data_service_1 = require('../data.service');
var card_1 = require('@angular2-material/card');
var IndicatorlistComponent = (function () {
    function IndicatorlistComponent(dataService) {
        this.dataService = dataService;
        this.icode = new core_1.EventEmitter();
        this.iname = new core_1.EventEmitter();
    }
    IndicatorlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (d) {
            _this.indicators = d;
        });
    };
    IndicatorlistComponent.prototype.getData = function (code, name) {
        //console.log(code);
        this.icode.next(code);
        this.iname.next(name);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], IndicatorlistComponent.prototype, "icode", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], IndicatorlistComponent.prototype, "iname", void 0);
    IndicatorlistComponent = __decorate([
        core_1.Component({
            selector: 'app-indicatorlist',
            templateUrl: 'app/indicatorlist/indicatorlist.component.html',
            styleUrls: ['app/indicatorlist/indicatorlist.component.css'],
            providers: [card_1.MD_CARD_DIRECTIVES, data_service_1.DataService],
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], IndicatorlistComponent);
    return IndicatorlistComponent;
}());
exports.IndicatorlistComponent = IndicatorlistComponent;
//# sourceMappingURL=../../indicatorlist.component.js.map