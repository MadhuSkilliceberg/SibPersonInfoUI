import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserCompany } from '../../Models/UserCompany';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserCompanyService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'UserCompany/';
  }

   // By using this method we will get the UserCompany 
  GetUserCompany(): any {
    return this.http.get(this.endpointUrl+"GetUserCompanys");
  }
  
  // By using this method we will get the UserCompany based on the Id
  GetUserCompanyById(id: number): any {
    return this.http.get(this.endpointUrl+"GetByUserCompanyId/" + id);
  }

  // By uing this method we will Add the UserCompany based on UserCompany
  AddUserCompany(usercompany: UserCompany): any {
    return this.http.post(this.endpointUrl+"AddUserCompany", usercompany)
  }

   // By uing this method we will Update the UserCompany based on UserCompany
   UpdateUserCompany(usercompany: UserCompany): any {
    return this.http.put(this.endpointUrl+"UpdateUserCompany", usercompany)
  }

// By using this method we will delete the UserCompany based on the Id
DeleteUserCompany(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteUserCompany/" + id);
  }
}
