import {Component,Input,Output,EventEmitter} from 'angular2/core';

@Component({
    selector: 'heart',
    template: `
    <link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
    <i
    class="glyphicon"
    [class.glyphicon-heart] = "isFavorite"
    [class.glyphicon-heart-empty] = "!isFavorite"
    (click)="onClick()">{{favNumber}}
    </i>

    `
    ,
    styles: 
    [`
      .glyphicon-heart {
          color: orange
      }
    `],
})
export class HeartComponent {
  @Input() isFavorite = false;
  @Input() favNumber = 10;
  heartColor = 'orange';
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.favNumber = this.isFavorite ? 10:9;
    console.log('on click' + this.isFavorite);
  }
}
