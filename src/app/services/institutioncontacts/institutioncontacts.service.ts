import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { InstitutionContacts } from '../../Models/InstitutionContacts';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstitutionContactsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'InstitutionContact/';
  }

   // By using this method we will get the InstitutionContacts 
  GetInstitutionContacts(): any {
    return this.http.get(this.endpointUrl+"GetInstitutionContacts");
  }
  
  // By using this method we will get the InstitutionContacts based on the Id
  GetInstitutionContactsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetInstitutionContactsById/" + id);
  }

  // By uing this method we will Add the InstitutionContacts based on InstitutionContacts
  AddInstitutionContacts(institutioncontacts: InstitutionContacts): any {
    return this.http.post(this.endpointUrl+"AddInstitutionContacts", institutioncontacts)
  }

   // By uing this method we will Update the InstitutionContacts based on InstitutionContacts
   UpdateInstitutionContacts(institutioncontacts: InstitutionContacts): any {
    return this.http.put(this.endpointUrl+"UpdateInstitutionContacts", institutioncontacts)
  }

// By using this method we will delete the InstitutionContacts based on the Id
DeleteInstitutionContacts(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteInstitutionContacts/" + id);
  }
}
