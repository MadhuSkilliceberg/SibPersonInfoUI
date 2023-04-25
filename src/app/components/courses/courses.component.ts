import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/Models/Courses';
import { CoursesService } from './../../services/courses/courses.service'


@Component({
  selector: 'app-Courses',
  templateUrl: './Courses.component.html',
  styleUrls: ['./Courses.component.css']
})
export class CoursesComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  courses: Courses = new Courses();
  coursesData: Courses[] = []
  coursesId: number = 0;

  constructor(
    private coursesService: CoursesService,

  ) { }

  ngOnInit(): any {
    this.GetCourses();
  }

  // By using this method we will get the Courses 
  GetCourses(): any {
    this.coursesService.GetCourses().subscribe((res: any) => {
      this.coursesData = res;

    })
  }

  // By using this method we will get the Courses based on the Id
  GetCoursesById(Id: number): any {
    this.coursesService.GetCoursesById(Id).subscribe((res: any) => {
      this.courses = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Courses based on Courses
  AddCourses(): any {
    this.coursesService.AddCourses(this.courses).subscribe((res: any) => {
      this.GetCourses();
      this.courses = new Courses();
    })
  }

   // By uing this method we will Update the Courses based on Courses
  UpdateCourses(): any {
    this.coursesService.UpdateCourses(this.courses).subscribe((res: any) => {
      this.GetCourses();
      this.courses = new Courses();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Courses based on the Id
  DeleteCourses(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.coursesService.DeleteCourses(Id).subscribe((res: any) => {
        this.GetCourses();
        this.courses = new Courses();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetCourses();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetCourses();
  }
}

