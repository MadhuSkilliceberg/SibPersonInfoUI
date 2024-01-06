import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CompanyAddress } from '../../Models/CompanyAddress';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyAddressService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'CompanyAddress/';
  }

   // By using this method we will get the CompanyAddress 
  GetCompanyAddress(): any {
    return this.http.get(this.endpointUrl+"GetCompanyAddress");
  }
  
  // By using this method we will get the CompanyAddress based on the Id
  GetCompanyAddressById(id: number): any {
    return this.http.get(this.endpointUrl+"GetCompanyAddressById/" + id);
  }

  // By uing this method we will Add the CompanyAddress based on CompanyAddress
  AddCompanyAddress(companyaddress: CompanyAddress): any {
    return this.http.post(this.endpointUrl+"AddCompanyAddress", companyaddress)
  }

   // By uing this method we will Update the CompanyAddress based on CompanyAddress
   UpdateCompanyAddress(companyaddress: CompanyAddress): any {
    return this.http.put(this.endpointUrl+"UpdateCompanyAddress", companyaddress)
  }

  // By using this method we will delete the CompanyAddress based on the Id
  DeleteCompanyAddress(id: number): any {
    return this.http.delete(this.endpointUrl + "DeleteCompanyAddress/" + id);
  }

  // By using this method we will get the CompanyAddress based on the CompanyId
  GetCompanyAddressIdByCompanyId(companyid: number): any {
    return this.http.get(this.endpointUrl + "GetCompanyAddressIdByCompanyId/" + companyid);
  }

  
}
