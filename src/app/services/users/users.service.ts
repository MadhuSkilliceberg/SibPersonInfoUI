import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Users } from '../../Models/Users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Users';
  }

   // By using this method we will get the Users 
  GetUsers(): any {
    return this.http.get(this.endpointUrl+"GetUsers");
  }
  
  // By using this method we will get the Users based on the Id
  GetUsersById(id: number): any {
    return this.http.get(this.endpointUrl+"GetUsersById/" + id);
  }

  // By uing this method we will Add the Users based on Users
  AddUsers(users: Users): any {
    return this.http.post(this.endpointUrl+"AddUsers", users)
  }

   // By uing this method we will Update the Users based on Users
   UpdateUsers(users: Users): any {
    return this.http.put(this.endpointUrl+"UpdateUsers", users)
  }

// By using this method we will delete the Users based on the Id
DeleteUsers(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteUsers/" + id);
  }
}
