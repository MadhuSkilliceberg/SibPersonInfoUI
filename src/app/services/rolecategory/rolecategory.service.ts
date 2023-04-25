import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RoleCategory } from '../../Models/RoleCategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleCategoryService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'RoleCategory';
  }

   // By using this method we will get the RoleCategory 
  GetRoleCategory(): any {
    return this.http.get(this.endpointUrl+"GetRoleCategory");
  }
  
  // By using this method we will get the RoleCategory based on the Id
  GetRoleCategoryById(id: number): any {
    return this.http.get(this.endpointUrl+"GetRoleCategoryById/" + id);
  }

  // By uing this method we will Add the RoleCategory based on RoleCategory
  AddRoleCategory(rolecategory: RoleCategory): any {
    return this.http.post(this.endpointUrl+"AddRoleCategory", rolecategory)
  }

   // By uing this method we will Update the RoleCategory based on RoleCategory
   UpdateRoleCategory(rolecategory: RoleCategory): any {
    return this.http.put(this.endpointUrl+"UpdateRoleCategory", rolecategory)
  }

// By using this method we will delete the RoleCategory based on the Id
DeleteRoleCategory(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteRoleCategory/" + id);
  }
}
