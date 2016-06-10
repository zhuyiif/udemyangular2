import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthersComponent} from './author.component';

@Component({
    selector: 'my-app',
    template: '<h1>My name is judy</h1><courses></courses><authers></authers>',
    directives: [CoursesComponent ,AuthersComponent]
})
export class AppComponent { }
