import { Component, OnInit } from '@angular/core';
import { CYears } from 'src/app/Models/CYears';
import { CourseYear } from 'src/app/Models/CourseYear';
import { Courses } from 'src/app/Models/Courses';
// import { CourseYearService } from './../../services/courseyear/courseyear.service'
import { CoursesService } from 'src/app/services/courses/courses.service';
import { CourseYearService } from 'src/app/services/courseyear/courseyear.service';
import { CYearsService } from 'src/app/services/cyears/cyears.service';


@Component({
  selector: 'app-CourseYear',
  templateUrl: './CourseYear.component.html',
  styleUrls: ['./CourseYear.component.css']
})
export class CourseYearComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  courseyear: CourseYear = new CourseYear();
  courseyearData: CourseYear[] = []
  courseyearId: number = 0;


  courses: Courses[] = [];

  cYearsData: CYears[] = [];

  // courseyearList:CourseyearList []=[];

  constructor(
    private courseyearService: CourseYearService,
    private courseservice: CoursesService,
    private cYearsService: CYearsService
  ) { }

  ngOnInit(): any {
    //this.GetCourseYear();
    this.GetcouresYearLists();
    this.GetCourse();
    this .GetCyear();

  }

  // By using this method we will get the CourseYear 
  GetCourseYear(): any {
    this.courseyearService.GetCourseYear().subscribe((res: any) => {
      this.courseyearData = res;

    })
  }

  // By using this method we will get the CourseYear based on the Id
  GetCourseYearById(Id: number): any {
    this.courseyearService.GetCourseYearById(Id).subscribe((res: any) => {
      this.courseyear = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the CourseYear based on CourseYear
  AddCourseYear(): any {
    this.courseyearService.AddCourseYear(this.courseyear).subscribe((res: any) => {
      this.GetcouresYearLists();
      this.courseyear = new CourseYear();
    })
  }

  // By uing this method we will Update the CourseYear based on CourseYear
  UpdateCourseYear(): any {
    this.courseyearService.UpdateCourseYear(this.courseyear).subscribe((res: any) => {
      //this.GetCourseYear();
      this.GetcouresYearLists();
      this.courseyear = new CourseYear();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

  // By using this method we will delete the CourseYear based on the Id
  DeleteCourseYear(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.courseyearService.DeleteCourseYear(Id).subscribe((res: any) => {
        this.GetcouresYearLists();
        this.courseyear = new CourseYear();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetcouresYearLists();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetcouresYearLists();
  }


  GetCourse(): any {
    this.courseservice.GetCourses().subscribe((resp: any) => {
      this.courses = resp;
    })
  }

  GetCyear(): any {
    this.cYearsService.GetCYears().subscribe((resp: any) => {
      this.cYearsData = resp;
    })
  }

  
  //By using this method we will get the GetcouresYearLists
  GetcouresYearLists(): any {
    return this.courseyearService.GetcouresYearLists().subscribe((resp: any) => {
      this.courseyearData = resp;
    })
  }

}

