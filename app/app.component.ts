import {Component,Input} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthersComponent} from './author.component';
import {FavoriteComponent} from './favorite.component';

@Component({
    selector: 'my-app',
    template: `
    <link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
    <h1>My name is judy</h1><courses></courses><authers></authers>
    <favorite [isFavorite]= "post.isFavorite"></favorite>
    `
    ,
    directives: [CoursesComponent ,AuthersComponent,FavoriteComponent]
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite:true
  }
}
