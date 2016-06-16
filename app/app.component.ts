import {Component,Input} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthersComponent} from './author.component';
import {FavoriteComponent} from './favorite.component';
import {HeartComponent} from './heart.component'

@Component({
    selector: 'my-app',
    template: `
    <link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
    <h1>My name is judy</h1><courses></courses><authers></authers>
    <favorite [isFavorite]= "post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
    <heart></heart>
    `
    ,
    directives: [CoursesComponent ,AuthersComponent,FavoriteComponent,HeartComponent]
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite:true
  }
  onFavoriteChange($event) {
    console.log($event);
  }
}
