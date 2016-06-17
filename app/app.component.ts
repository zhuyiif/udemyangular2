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

    <div *ngIf ="tweets.length > 0">
     <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
     </div>
    </div>

     <div *ngIf ="tweets.length == 0">
      no tweets !
     </div>

     <ul class="nav nav-pills">
      <li [class.active] = "viewMode == 'Home'"><a (click)="viewMode = 'Home'">Home</a></li>
      <li [class.active] = "viewMode == 'Profile'"><a (click)="viewMode = 'Profile'">Profile</a></li>
      <li><a>Messages</a></li>
    </ul>

    <div [ngSwitch]="viewMode">
      <template [ngSwitchWhen] ='"Home"'>Home is my Home</template>
      <template [ngSwitchWhen] ='"Profile"'>Profile is my</template>
      hahaha
    </div>

    
    `
  ,
  directives: [CoursesComponent, AuthersComponent, FavoriteComponent, HeartComponent, TweetComponent],
  providers: [TweetService]
})
export class AppComponent {
  tweets: any[];
  viewMode = "test";
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
