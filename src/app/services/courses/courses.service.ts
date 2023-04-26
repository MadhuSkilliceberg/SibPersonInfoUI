import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Courses } from '../../Models/Courses';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Course/';
  }

   // By using this method we will get the Courses 
  GetCourses(): any {
    return this.http.get(this.endpointUrl+"GetCourses");
  }
  
  // By using this method we will get the Courses based on the Id
  GetCoursesById(id: number): any {
    return this.http.get(this.endpointUrl+"GetCoursesById/" + id);
  }

  // By uing this method we will Add the Courses based on Courses
  AddCourses(courses: Courses): any {
    return this.http.post(this.endpointUrl+"AddCourses", courses)
  }

   // By uing this method we will Update the Courses based on Courses
   UpdateCourses(courses: Courses): any {
    return this.http.put(this.endpointUrl+"Updatecourses", courses)
  }

// By using this method we will delete the Courses based on the Id
DeleteCourses(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteCourses/" + id);
  }
}
