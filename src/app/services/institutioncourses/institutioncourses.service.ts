import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { InstitutionCourses } from '../../Models/InstitutionCourses';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstitutionCoursesService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'InstitutionCourse/';
  }

   // By using this method we will get the InstitutionCourses 
  GetInstitutionCourses(): any {
    return this.http.get(this.endpointUrl+"GetInstitutionCourses");
  }
  
  // By using this method we will get the InstitutionCourses based on the Id
  GetInstitutionCoursesById(id: number): any {
    return this.http.get(this.endpointUrl+"GetInstitutionCoursesById/" + id);
  }

  // By uing this method we will Add the InstitutionCourses based on InstitutionCourses
  AddInstitutionCourses(institutioncourses: InstitutionCourses): any {
    return this.http.post(this.endpointUrl+"AddInstitutionCourses", institutioncourses)
  }

   // By uing this method we will Update the InstitutionCourses based on InstitutionCourses
   UpdateInstitutionCourses(institutioncourses: InstitutionCourses): any {
    return this.http.put(this.endpointUrl+"UpdatetInstitutionCourses", institutioncourses)
  }

// By using this method we will delete the InstitutionCourses based on the Id
DeleteInstitutionCourses(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteInstitutionCourses/" + id);
  }
}
