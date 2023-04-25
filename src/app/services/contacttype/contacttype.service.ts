import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ContactType } from '../../Models/ContactType';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactTypeService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'ContactType';
  }

   // By using this method we will get the ContactType 
  GetContactType(): any {
    return this.http.get(this.endpointUrl+"GetContactType");
  }
  
  // By using this method we will get the ContactType based on the Id
  GetContactTypeById(id: number): any {
    return this.http.get(this.endpointUrl+"GetContactTypeById/" + id);
  }

  // By uing this method we will Add the ContactType based on ContactType
  AddContactType(contacttype: ContactType): any {
    return this.http.post(this.endpointUrl+"AddContactType", contacttype)
  }

   // By uing this method we will Update the ContactType based on ContactType
   UpdateContactType(contacttype: ContactType): any {
    return this.http.put(this.endpointUrl+"UpdateContactType", contacttype)
  }

// By using this method we will delete the ContactType based on the Id
DeleteContactType(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteContactType/" + id);
  }
}
