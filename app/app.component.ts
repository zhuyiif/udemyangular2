import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';

@Component({
    selector: 'my-app',
    template: '<h1>My name is judy</h1><courses></courses>',
    directives: [CoursesComponent]
})
export class AppComponent { }
