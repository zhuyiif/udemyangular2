import {Component,Input} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthersComponent} from './author.component';
import {FavoriteComponent} from './favorite.component';
import {HeartComponent} from './heart.component'
import {TweetComponent} from './tweet.component'
import {TweetService} from './tweet.service'

@Component({
    selector: 'my-app',
    template: `
    <link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
     <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
    `
    ,
    directives: [CoursesComponent ,AuthersComponent,FavoriteComponent,HeartComponent,TweetComponent],
     providers: [TweetService]
})
export class AppComponent {
  tweets: any[];
  post = {
    title: "Title",
    isFavorite:true
  }
  constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }
  onFavoriteChange($event) {
    console.log($event);
  }
}
