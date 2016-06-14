import {Component,Input} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthersComponent} from './author.component';

@Component({
    selector: 'favorite',
    template: `
    <link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
    <i
    class="glyphicon"
    [class.glyphicon-star-empty] = "!isFavorite"
    [class.glyphicon-star] = "isFavorite"
    (click)="onClick()">
    </i>
    `
    ,
    directives: [CoursesComponent ,AuthersComponent]
})
export class FavoriteComponent {
  @Input() isFavorite = false;

  onClick() {
    this.isFavorite = !this.isFavorite;
    console.log('on click' + this.isFavorite);
  }
}
