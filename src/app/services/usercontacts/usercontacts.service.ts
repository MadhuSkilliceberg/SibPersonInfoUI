import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserContacts } from '../../Models/UserContacts';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserContactsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'UserContacts';
  }

   // By using this method we will get the UserContacts 
  GetUserContacts(): any {
    return this.http.get(this.endpointUrl+"GetUserContacts");
  }
  
  // By using this method we will get the UserContacts based on the Id
  GetUserContactsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetUserContactsById/" + id);
  }

  // By uing this method we will Add the UserContacts based on UserContacts
  AddUserContacts(usercontacts: UserContacts): any {
    return this.http.post(this.endpointUrl+"AddUserContacts", usercontacts)
  }

   // By uing this method we will Update the UserContacts based on UserContacts
   UpdateUserContacts(usercontacts: UserContacts): any {
    return this.http.put(this.endpointUrl+"UpdateUserContacts", usercontacts)
  }

// By using this method we will delete the UserContacts based on the Id
DeleteUserContacts(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteUserContacts/" + id);
  }
}
