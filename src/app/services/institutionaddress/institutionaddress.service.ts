import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { InstitutionAddress } from '../../Models/InstitutionAddress';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstitutionAddressService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'InstitutionAddress';
  }

   // By using this method we will get the InstitutionAddress 
  GetInstitutionAddress(): any {
    return this.http.get(this.endpointUrl+"GetInstitutionAddress");
  }
  
  // By using this method we will get the InstitutionAddress based on the Id
  GetInstitutionAddressById(id: number): any {
    return this.http.get(this.endpointUrl+"GetInstitutionAddressById/" + id);
  }

  // By uing this method we will Add the InstitutionAddress based on InstitutionAddress
  AddInstitutionAddress(institutionaddress: InstitutionAddress): any {
    return this.http.post(this.endpointUrl+"AddInstitutionAddress", institutionaddress)
  }

   // By uing this method we will Update the InstitutionAddress based on InstitutionAddress
   UpdateInstitutionAddress(institutionaddress: InstitutionAddress): any {
    return this.http.put(this.endpointUrl+"UpdateInstitutionAddress", institutionaddress)
  }

// By using this method we will delete the InstitutionAddress based on the Id
DeleteInstitutionAddress(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteInstitutionAddress/" + id);
  }
}
