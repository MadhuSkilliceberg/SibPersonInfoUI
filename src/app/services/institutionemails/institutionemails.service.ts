import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { InstitutionEmails } from '../../Models/InstitutionEmails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstitutionEmailsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'InstitutionEmails';
  }

   // By using this method we will get the InstitutionEmails 
  GetInstitutionEmails(): any {
    return this.http.get(this.endpointUrl+"GetInstitutionEmails");
  }
  
  // By using this method we will get the InstitutionEmails based on the Id
  GetInstitutionEmailsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetInstitutionEmailsById/" + id);
  }

  // By uing this method we will Add the InstitutionEmails based on InstitutionEmails
  AddInstitutionEmails(institutionemails: InstitutionEmails): any {
    return this.http.post(this.endpointUrl+"AddInstitutionEmails", institutionemails)
  }

   // By uing this method we will Update the InstitutionEmails based on InstitutionEmails
   UpdateInstitutionEmails(institutionemails: InstitutionEmails): any {
    return this.http.put(this.endpointUrl+"UpdateInstitutionEmails", institutionemails)
  }

// By using this method we will delete the InstitutionEmails based on the Id
DeleteInstitutionEmails(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteInstitutionEmails/" + id);
  }
}
