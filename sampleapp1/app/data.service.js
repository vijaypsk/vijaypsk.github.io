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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var DataService = (function () {
    //private dataUrl = 'http://localhost:8000/data/2012';  // URL to web API
    function DataService(http) {
        this.http = http;
        this.dataUrl = 'http://104.197.198.248:8000/definitions';
        //private indicatordataUrl = 'http://localhost:8000/data/';  // URL to web API
        this.indicatordataUrl = 'http://104.197.198.248:8000/data/'; // URL to web API
    }
    DataService.prototype.getData = function () {
        return this.http.get(this.dataUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.getResultData = function (icode, year) {
        var url = this.indicatordataUrl + year + '/' + icode;
        console.log("DataService url " + url);
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.extractData = function (res) {
        //console.log(res.json());
        return res.json();
    };
    DataService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=../data.service.js.map