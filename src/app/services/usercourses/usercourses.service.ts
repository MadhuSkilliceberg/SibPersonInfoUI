import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserCourses } from '../../Models/UserCourses';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserCoursesService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'UserCourse/';
  }

   // By using this method we will get the UserCourses 
  GetUserCourses(): any {
    return this.http.get(this.endpointUrl+"GetUserCourses");
  }
  
  // By using this method we will get the UserCourses based on the Id
  GetUserCoursesById(id: number): any {
    return this.http.get(this.endpointUrl+"GetUserCoursesById/" + id);
  }

  // By uing this method we will Add the UserCourses based on UserCourses
  AddUserCourses(usercourses: UserCourses): any {
    return this.http.post(this.endpointUrl+"AddUserCourses", usercourses)
  }

   // By uing this method we will Update the UserCourses based on UserCourses
   UpdateUserCourses(usercourses: UserCourses): any {
    return this.http.put(this.endpointUrl+"UpdatetUserCourses", usercourses)
  }

// By using this method we will delete the UserCourses based on the Id
DeleteUserCourses(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteUserCourses/" + id);
  }
}
