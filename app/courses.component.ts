import {Component} from 'angular2/core'
import {CourseService} from './course.service';
@Component({
  selector: 'courses',
  template: `<h2>zack\'s Courses</h2>
            {{title}}
            <ul>
            <li *ngFor = "#course of courses">
            {{course}}
            </li>
            </ul>
            `
            ,
  providers: [CourseService]
})
export class CoursesComponent {
  title = "title of";
  courses;
  constructor(courseService : CourseService) {
    this.courses = courseService.getCourses();
  }
}
