import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CourseYear } from '../../Models/CourseYear';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseYearService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'CourseYear/';
  }

   // By using this method we will get the CourseYear 
  GetCourseYear(): any {
    return this.http.get(this.endpointUrl+"GetCourseYear");
  }
  
  // By using this method we will get the CourseYear based on the Id
  GetCourseYearById(id: number): any {
    return this.http.get(this.endpointUrl+"GetCourseYearById/" + id);
  }

  // By uing this method we will Add the CourseYear based on CourseYear
  AddCourseYear(courseyear: CourseYear): any {
    return this.http.post(this.endpointUrl+"AddCourseYear", courseyear)
  }

   // By uing this method we will Update the CourseYear based on CourseYear
   UpdateCourseYear(courseyear: CourseYear): any {
    return this.http.put(this.endpointUrl+"UpdateCourseYear", courseyear)
  }

// By using this method we will delete the CourseYear based on the Id
DeleteCourseYear(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteCourseYear/" + id);
  }
}
