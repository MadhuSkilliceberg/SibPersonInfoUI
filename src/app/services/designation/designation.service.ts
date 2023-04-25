import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Designation } from '../../Models/Designation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Designation';
  }

   // By using this method we will get the Designation 
  GetDesignation(): any {
    return this.http.get(this.endpointUrl+"GetDesignation");
  }
  
  // By using this method we will get the Designation based on the Id
  GetDesignationById(id: number): any {
    return this.http.get(this.endpointUrl+"GetDesignationById/" + id);
  }

  // By uing this method we will Add the Designation based on Designation
  AddDesignation(designation: Designation): any {
    return this.http.post(this.endpointUrl+"AddDesignation", designation)
  }

   // By uing this method we will Update the Designation based on Designation
   UpdateDesignation(designation: Designation): any {
    return this.http.put(this.endpointUrl+"UpdateDesignation", designation)
  }

// By using this method we will delete the Designation based on the Id
DeleteDesignation(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteDesignation/" + id);
  }
}
