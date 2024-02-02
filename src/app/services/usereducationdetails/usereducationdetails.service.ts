import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserEducationDetails } from '../../Models/UserEducationDetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserEducationDetailsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'UserEducationDetails/';
  }

  // By using this method we will get the UserEducationDetails 
  GetUserEducationDetails(): any {
    return this.http.get(this.endpointUrl + "GetUserEducationDetails");
  }

  // By using this method we will get the UserEducationDetails based on the Id
  GetUserEducationDetailsById(id: number): any {
    return this.http.get(this.endpointUrl + "GetUserEducationDetailsById/" + id);
  }

  // By uing this method we will Add the UserEducationDetails based on UserEducationDetails
  AddUserEducationDetail(usereducationdetails: UserEducationDetails): any {
    return this.http.post(this.endpointUrl + "AddUserEducationDetail", usereducationdetails)
  }

  AddUserEducationDetails(usereducationdetails: UserEducationDetails[]): any {
    return this.http.post(this.endpointUrl + "AddUserEducationDetails", usereducationdetails)
  }

  // By uing this method we will Update the UserEducationDetails based on UserEducationDetails
  UpdateUserEducationDetails(usereducationdetails: UserEducationDetails[]): any {
    return this.http.put(this.endpointUrl + "UpdateUserEducationDetails", usereducationdetails)
  }

  // By uing this method we will Update the UserEducationDetails based on UserEducationDetails
  UpdateUserEducationDetail(usereducationdetails: UserEducationDetails): any {
    return this.http.put(this.endpointUrl + "UpdateUserEducationDetail", usereducationdetails)
  }


  // By using this method we will delete the UserEducationDetails based on the Id
  DeleteUserEducationDetails(id: number): any {
    return this.http.delete(this.endpointUrl + "DeleteUserEducationDetails/" + id);
  }
}
