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

  // By using this method we will get the UserCompanies 
  GetUserCompanies(): any {
    return this.http.get(this.endpointUrl + "GetUserCompanies");
  }

  // By using this method we will get the UserCompany based on the Id
  GetUserCompanyById(id: number): any {
    return this.http.get(this.endpointUrl + "GetUserCompanyById/" + id);
  }

  // By uing this method we will Add the UserCompany based on UserCompany
  AddUserCompany(usercompany: UserCompany): any {
    return this.http.post(this.endpointUrl + "AddUserCompany", usercompany)
  }

  // By uing this method we will Add the UserCompany based on UserCompany
  AddUserCompanies(usercompany: UserCompany[]): any {
    return this.http.post(this.endpointUrl + "AddUserCompanies", usercompany)
  }

  // By uing this method we will Update the UserCompany based on UserCompany
  UpdateUserCompany(usercompany: UserCompany): any {
    return this.http.put(this.endpointUrl + "UpdateUserCompany", usercompany)
  }

  
  // By uing this method we will Update the UserCompany based on UserCompany
  UpdateUserCompanies(usercompany: UserCompany[]): any {
    return this.http.put(this.endpointUrl + "UpdateUserCompanies", usercompany)
  }

  // By using this method we will delete the UserCompany based on the Id
  DeleteUserCompany(id: number): any {
    return this.http.delete(this.endpointUrl + "DeleteUserCompany/" + id);
  }

}
