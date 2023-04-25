import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserAddressDetails } from '../../Models/UserAddressDetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAddressDetailsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'UserAddressDetails';
  }

   // By using this method we will get the UserAddressDetails 
  GetUserAddressDetails(): any {
    return this.http.get(this.endpointUrl+"GetUserAddressDetails");
  }
  
  // By using this method we will get the UserAddressDetails based on the Id
  GetUserAddressDetailsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetUserAddressDetailsById/" + id);
  }

  // By uing this method we will Add the UserAddressDetails based on UserAddressDetails
  AddUserAddressDetails(useraddressdetails: UserAddressDetails): any {
    return this.http.post(this.endpointUrl+"AddUserAddressDetails", useraddressdetails)
  }

   // By uing this method we will Update the UserAddressDetails based on UserAddressDetails
   UpdateUserAddressDetails(useraddressdetails: UserAddressDetails): any {
    return this.http.put(this.endpointUrl+"UpdateUserAddressDetails", useraddressdetails)
  }

// By using this method we will delete the UserAddressDetails based on the Id
DeleteUserAddressDetails(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteUserAddressDetails/" + id);
  }
}
