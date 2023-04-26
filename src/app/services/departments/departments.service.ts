import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Departments } from '../../Models/Departments';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Departments/';
  }

   // By using this method we will get the Departments 
  GetDepartments(): any {
    return this.http.get(this.endpointUrl+"GetDepartments");
  }
  
  // By using this method we will get the Departments based on the Id
  GetDepartmentsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetDepartmentsById/" + id);
  }

  // By uing this method we will Add the Departments based on Departments
  AddDepartments(departments: Departments): any {
    return this.http.post(this.endpointUrl+"AddDepartments", departments)
  }

   // By uing this method we will Update the Departments based on Departments
   UpdateDepartments(departments: Departments): any {
    return this.http.put(this.endpointUrl+"UpdateDepartments", departments)
  }

// By using this method we will delete the Departments based on the Id
DeleteDepartments(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteDepartments/" + id);
  }
}
