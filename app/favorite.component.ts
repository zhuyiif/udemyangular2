import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthersComponent} from './author.component';

@Component({
    selector: 'favorite',
    templateUrl:"app/favorite.template.html"
    ,
    styles: [`
      .glyphicon-star {
        color: orange;
      }
    `],
    directives: [CoursesComponent ,AuthersComponent]
})
export class FavoriteComponent {
  @Input() isFavorite = false;
  @Output() change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    console.log('on click' + this.isFavorite);
    this.change.emit({ newValue: this.isFavorite});
  }
}
