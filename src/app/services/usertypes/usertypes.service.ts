import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserTypes } from '../../Models/UserTypes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserTypesService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'UserType/';
  }

   // By using this method we will get the UserTypes 
  GetUserTypes(): any {
    return this.http.get(this.endpointUrl+"GetUserTypes");
  }
  
  // By using this method we will get the UserTypes based on the Id
  GetUserTypesById(id: number): any {
    return this.http.get(this.endpointUrl+"GetUserTypesById/" + id);
  }

  // By uing this method we will Add the UserTypes based on UserTypes
  AddUserTypes(usertypes: UserTypes): any {
    return this.http.post(this.endpointUrl+"AddUserTypes", usertypes)
  }

   // By uing this method we will Update the UserTypes based on UserTypes
   UpdateUserTypes(usertypes: UserTypes): any {
    return this.http.put(this.endpointUrl+"UpdateUserTypes", usertypes)
  }

// By using this method we will delete the UserTypes based on the Id
DeleteUserTypes(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteUserTypes/" + id);
  }
}
