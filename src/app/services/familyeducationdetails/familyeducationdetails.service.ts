import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FamilyEducationDetails } from '../../Models/FamilyEducationDetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FamilyEducationDetailsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'FamilyEducationDetails';
  }

   // By using this method we will get the FamilyEducationDetails 
  GetFamilyEducationDetails(): any {
    return this.http.get(this.endpointUrl+"GetFamilyEducationDetails");
  }
  
  // By using this method we will get the FamilyEducationDetails based on the Id
  GetFamilyEducationDetailsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetFamilyEducationDetailsById/" + id);
  }

  // By uing this method we will Add the FamilyEducationDetails based on FamilyEducationDetails
  AddFamilyEducationDetails(familyeducationdetails: FamilyEducationDetails): any {
    return this.http.post(this.endpointUrl+"AddFamilyEducationDetails", familyeducationdetails)
  }

   // By uing this method we will Update the FamilyEducationDetails based on FamilyEducationDetails
   UpdateFamilyEducationDetails(familyeducationdetails: FamilyEducationDetails): any {
    return this.http.put(this.endpointUrl+"UpdateFamilyEducationDetails", familyeducationdetails)
  }

// By using this method we will delete the FamilyEducationDetails based on the Id
DeleteFamilyEducationDetails(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteFamilyEducationDetails/" + id);
  }
}
