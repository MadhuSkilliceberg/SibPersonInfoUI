import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { EmploymentTypes } from '../../Models/EmploymentTypes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmploymentTypesService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'EmploymentTypes';
  }

   // By using this method we will get the EmploymentTypes 
  GetEmploymentTypes(): any {
    return this.http.get(this.endpointUrl+"GetEmploymentTypes");
  }
  
  // By using this method we will get the EmploymentTypes based on the Id
  GetEmploymentTypesById(id: number): any {
    return this.http.get(this.endpointUrl+"GetEmploymentTypesById/" + id);
  }

  // By uing this method we will Add the EmploymentTypes based on EmploymentTypes
  AddEmploymentTypes(employmenttypes: EmploymentTypes): any {
    return this.http.post(this.endpointUrl+"AddEmploymentTypes", employmenttypes)
  }

   // By uing this method we will Update the EmploymentTypes based on EmploymentTypes
   UpdateEmploymentTypes(employmenttypes: EmploymentTypes): any {
    return this.http.put(this.endpointUrl+"UpdateEmploymentTypes", employmenttypes)
  }

// By using this method we will delete the EmploymentTypes based on the Id
DeleteEmploymentTypes(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteEmploymentTypes/" + id);
  }
}
