import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CompanyContacts } from '../../Models/CompanyContacts';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyContactsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'CompanyContacts';
  }

   // By using this method we will get the CompanyContacts 
  GetCompanyContacts(): any {
    return this.http.get(this.endpointUrl+"GetCompanyContacts");
  }
  
  // By using this method we will get the CompanyContacts based on the Id
  GetCompanyContactsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetCompanyContactsById/" + id);
  }

  // By uing this method we will Add the CompanyContacts based on CompanyContacts
  AddCompanyContacts(companycontacts: CompanyContacts): any {
    return this.http.post(this.endpointUrl+"AddCompanyContacts", companycontacts)
  }

   // By uing this method we will Update the CompanyContacts based on CompanyContacts
   UpdateCompanyContacts(companycontacts: CompanyContacts): any {
    return this.http.put(this.endpointUrl+"UpdateCompanyContacts", companycontacts)
  }

// By using this method we will delete the CompanyContacts based on the Id
DeleteCompanyContacts(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteCompanyContacts/" + id);
  }
}
