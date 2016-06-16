System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HeartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeartComponent = (function () {
                function HeartComponent() {
                    this.isFavorite = false;
                    this.favNumber = 10;
                    this.heartColor = 'orange';
                }
                HeartComponent.prototype.onClick = function () {
                    this.isFavorite = !this.isFavorite;
                    this.favNumber = this.isFavorite ? 10 : 9;
                    console.log('on click' + this.isFavorite);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HeartComponent.prototype, "isFavorite", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HeartComponent.prototype, "favNumber", void 0);
                HeartComponent = __decorate([
                    core_1.Component({
                        selector: 'heart',
                        template: "\n    <link data-require=\"bootstrap-css@3.3.6\" data-semver=\"3.3.6\" rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" />\n    <i\n    class=\"glyphicon glyphicon-heart\"\n    [class.highlighted] = \"isFavorite\"\n    (click)=\"onClick()\">\n    </i>\n    <span>{{favNumber}}</span>\n\n    ",
                        styles: ["\n      .glyphicon-heart {\n          color: orange\n      }\n\n      .highlighted {\n          color: deeppink\n      }\n    "],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeartComponent);
                return HeartComponent;
            }());
            exports_1("HeartComponent", HeartComponent);
        }
    }
});
//# sourceMappingURL=heart.component.js.map