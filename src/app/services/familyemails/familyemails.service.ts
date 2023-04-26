import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FamilyEmails } from '../../Models/FamilyEmails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FamilyEmailsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'FamilyEmail/';
  }

   // By using this method we will get the FamilyEmails 
  GetFamilyEmails(): any {
    return this.http.get(this.endpointUrl+"GetFamilyEmails");
  }
  
  // By using this method we will get the FamilyEmails based on the Id
  GetFamilyEmailsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetFamilyEmailsById/" + id);
  }

  // By uing this method we will Add the FamilyEmails based on FamilyEmails
  AddFamilyEmails(familyemails: FamilyEmails): any {
    return this.http.post(this.endpointUrl+"AddFamilyEmails", familyemails)
  }

   // By uing this method we will Update the FamilyEmails based on FamilyEmails
   UpdateFamilyEmails(familyemails: FamilyEmails): any {
    return this.http.put(this.endpointUrl+"UpdateFamilyEmails", familyemails)
  }

// By using this method we will delete the FamilyEmails based on the Id
DeleteFamilyEmails(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteFamilyEmails/" + id);
  }
}
