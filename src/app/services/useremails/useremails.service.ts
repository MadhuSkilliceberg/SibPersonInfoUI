import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserEmails } from '../../Models/UserEmails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserEmailsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'UserEmails';
  }

   // By using this method we will get the UserEmails 
  GetUserEmails(): any {
    return this.http.get(this.endpointUrl+"GetUserEmails");
  }
  
  // By using this method we will get the UserEmails based on the Id
  GetUserEmailsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetUserEmailsById/" + id);
  }

  // By uing this method we will Add the UserEmails based on UserEmails
  AddUserEmails(useremails: UserEmails): any {
    return this.http.post(this.endpointUrl+"AddUserEmails", useremails)
  }

   // By uing this method we will Update the UserEmails based on UserEmails
   UpdateUserEmails(useremails: UserEmails): any {
    return this.http.put(this.endpointUrl+"UpdateUserEmails", useremails)
  }

// By using this method we will delete the UserEmails based on the Id
DeleteUserEmails(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteUserEmails/" + id);
  }
}
