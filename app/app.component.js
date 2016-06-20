System.register(['angular2/core', './courses.component', './author.component', './favorite.component', './heart.component', './tweet.component', './tweet.service', './zippy.component', './contact-form.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, author_component_1, favorite_component_1, heart_component_1, tweet_component_1, tweet_service_1, zippy_component_1, contact_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
                    this.viewMode = "test";
                    this.post = {
                        title: "Title",
                        isFavorite: true
                    };
                    this.tweets = tweetService.getTweets();
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <link data-require=\"bootstrap-css@3.3.6\" data-semver=\"3.3.6\" rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" />\n\n    <div *ngIf =\"tweets.length > 0\">\n     <div *ngFor=\"#tweet of tweets\">\n            <tweet [data]=\"tweet\"></tweet>\n     </div>\n    </div>\n\n     <div *ngIf =\"tweets.length == 0\">\n      no tweets !\n     </div>\n\n     <ul class=\"nav nav-pills\">\n      <li [class.active] = \"viewMode == 'Home'\"><a (click)=\"viewMode = 'Home'\">Home</a></li>\n      <li [class.active] = \"viewMode == 'Profile'\"><a (click)=\"viewMode = 'Profile'\">Profile</a></li>\n      <li><a>Messages</a></li>\n    </ul>\n\n    <div [ngSwitch]=\"viewMode\">\n      <template [ngSwitchWhen] ='\"Home\"'>Home is my Home</template>\n      <template [ngSwitchWhen] ='\"Profile\"'>Profile is my</template>\n      hahaha\n    </div>\n\n\n<zippy title=\"Who can see my stuff?\">\n            Content of who can see my stuff\n        </zippy>\n        <zippy title=\"Who can contact me?\">\n            Content of who can contact me\n        </zippy>\n    \n    <contact-form></contact-form>\n    ",
                        directives: [courses_component_1.CoursesComponent, author_component_1.AuthersComponent, favorite_component_1.FavoriteComponent, heart_component_1.HeartComponent, tweet_component_1.TweetComponent, zippy_component_1.ZippyComponent, contact_form_component_1.ContactFormComponent],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map