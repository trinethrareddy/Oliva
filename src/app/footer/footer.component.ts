import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  firstSection: any;
  companyLinks: any;
  trendingCourses: any;
  contactInfo: any;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  /**
  * @function gotoCourseDetails : goto course detail
  */
  gotoCourseDetails(courseName) {
    this.router.navigate(['/coursesDetails', courseName]);
  }
}
