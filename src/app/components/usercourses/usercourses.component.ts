import { Component, OnInit } from '@angular/core';
import { UserCourses } from 'src/app/Models/UserCourses';
import { UserCoursesService } from './../../services/usercourses/usercourses.service'
import { ContactTypeService } from 'src/app/services/contacttype/contacttype.service';
import { Courses } from 'src/app/Models/Courses';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { UsersService } from 'src/app/services/users/users.service';
import { Users } from 'src/app/Models/Users';


@Component({
  selector: 'app-UserCourses',
  templateUrl: './UserCourses.component.html',
  styleUrls: ['./UserCourses.component.css']
})
export class UserCoursesComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  usercourses: UserCourses = new UserCourses();
  usercoursesData: UserCourses[] = []
  usercoursesId: number = 0;
  coursesData: Courses[] = []
  usersData: Users[] = []

  constructor(
    private usercoursesService: UserCoursesService,
    private coursesService: CoursesService,
    private usersService: UsersService,

  ) { }

  ngOnInit(): any {
    this.GetUserCourses();
    this.GetCourses();
    this.GetUsers();
  }

  // By using this method we will get the UserCourses 
  GetUserCourses(): any {
    this.usercoursesService.GetUserCourses().subscribe((res: any) => {
      this.usercoursesData = res;

    })
  }

  // By using this method we will get the UserCourses based on the Id
  GetUserCoursesById(Id: number): any {
    this.usercoursesService.GetUserCoursesById(Id).subscribe((res: any) => {
      this.usercourses = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserCourses based on UserCourses
  AddUserCourses(): any {
    this.usercoursesService.AddUserCourses(this.usercourses).subscribe((res: any) => {
      this.GetUserCourses();
      this.usercourses = new UserCourses();
    })
  }

   // By uing this method we will Update the UserCourses based on UserCourses
  UpdateUserCourses(): any {
    this.usercoursesService.UpdateUserCourses(this.usercourses).subscribe((res: any) => {
      this.GetUserCourses();
      this.usercourses = new UserCourses();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the UserCourses based on the Id
  DeleteUserCourses(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.usercoursesService.DeleteUserCourses(Id).subscribe((res: any) => {
        this.GetUserCourses();
        this.usercourses = new UserCourses();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetUserCourses();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetUserCourses();
  }
  GetCourses(): any {
    this.coursesService.GetCourses().subscribe((res: any) => {
      this.coursesData = res;

    })
  }
  GetUsers(): any {
    this.usersService.GetUsers().subscribe((res: any) => {
      this.usersData = res;

    })
  }
}

