import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Company } from '../../Models/Company';
import { environment } from 'src/environments/environment';
import { CompanyDetail, CompanyModel } from 'src/app/Models/Company-reg';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Company/';
  }

  // By using this method we will get the Company 
  GetCompany(): any {
    return this.http.get(this.endpointUrl + "GetCompanies");
  }

  // By using this method we will get the Company based on the Id
  GetCompanyById(id: number): any {
    return this.http.get(this.endpointUrl + "GetCompanyById/" + id);
  }

  // By uing this method we will Add the Company based on Company
  AddCompany(company: Company): any {
    return this.http.post(this.endpointUrl + "AddCompany", company)
  }

  // By uing this method we will Update the Company based on Company
  UpdateCompany(company: Company): any {
    return this.http.put(this.endpointUrl + "UpdateCompany", company)
  }

  // By using this method we will delete the Company based on the Id
  DeleteCompany(id: number): any {
    return this.http.delete(this.endpointUrl + "DeleteCompany/" + id);
  }



  //By using this method we will add the CompanyModel 
  AddCompanyModel(CompanyModel: CompanyModel): any {
    return this.http.post(this.endpointUrl + "AddCompanyTables", CompanyModel);
  }

  //By using this method we will add the CompanyDetail 
  AddCompanyDetail(CompanyDetail: CompanyDetail): any {
    return this.http.post(this.endpointUrl + "AddCompanyDetail", CompanyDetail);
  }



}
