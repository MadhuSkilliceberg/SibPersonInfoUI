import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Roles } from '../../Models/Roles';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Roles/';
  }

   // By using this method we will get the Roles 
  GetRoles(): any {
    return this.http.get(this.endpointUrl+"GetRoles");
  }
  
  // By using this method we will get the Roles based on the Id
  GetRolesById(id: number): any {
    return this.http.get(this.endpointUrl+"GetRolesById/" + id);
  }

  // By uing this method we will Add the Roles based on Roles
  AddRoles(roles: Roles): any {
    return this.http.post(this.endpointUrl+"AddRoles", roles)
  }

   // By uing this method we will Update the Roles based on Roles
   UpdateRoles(roles: Roles): any {
    return this.http.put(this.endpointUrl+"UpdateRoles", roles)
  }

// By using this method we will delete the Roles based on the Id
DeleteRoles(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteRoles/" + id);
  }
}
