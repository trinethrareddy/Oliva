import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { COURSES } from '../mockData/courseDtails';
import * as _ from 'lodash';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  course: any;
  courseName: string;
  selectedCourse: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('COURSES::', COURSES);
    this.course = this.route.paramMap.subscribe((params: ParamMap) => {
      this.courseName = params.get('name');
      if (this.courseName) {
        console.log(this.courseName);
      }
    });
    if (this.courseName) {
      const matchedCourse = _.filter(COURSES, (course) => {
        return course.name === this.courseName;
      });
      if (matchedCourse.length) {
        this.selectedCourse = matchedCourse[0];
      }
    }

  }

}
