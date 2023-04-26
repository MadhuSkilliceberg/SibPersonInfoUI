import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FamilyContacts } from '../../Models/FamilyContacts';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FamilyContactsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'FamilyContact/';
  }

   // By using this method we will get the FamilyContacts 
  GetFamilyContacts(): any {
    return this.http.get(this.endpointUrl+"GetFamilyContacts");
  }
  
  // By using this method we will get the FamilyContacts based on the Id
  GetFamilyContactsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetFamilyContactsById/" + id);
  }

  // By uing this method we will Add the FamilyContacts based on FamilyContacts
  AddFamilyContacts(familycontacts: FamilyContacts): any {
    return this.http.post(this.endpointUrl+"AddFamilyContacts", familycontacts)
  }

   // By uing this method we will Update the FamilyContacts based on FamilyContacts
   UpdateFamilyContacts(familycontacts: FamilyContacts): any {
    return this.http.put(this.endpointUrl+"UpdateFamilyContacts", familycontacts)
  }

// By using this method we will delete the FamilyContacts based on the Id
DeleteFamilyContacts(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteFamilyContacts/" + id);
  }
}
