import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Institutions } from '../../Models/Institutions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstitutionsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Institutions';
  }

   // By using this method we will get the Institutions 
  GetInstitutions(): any {
    return this.http.get(this.endpointUrl+"GetInstitutions");
  }
  
  // By using this method we will get the Institutions based on the Id
  GetInstitutionsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetInstitutionsById/" + id);
  }

  // By uing this method we will Add the Institutions based on Institutions
  AddInstitutions(institutions: Institutions): any {
    return this.http.post(this.endpointUrl+"AddInstitutions", institutions)
  }

   // By uing this method we will Update the Institutions based on Institutions
   UpdateInstitutions(institutions: Institutions): any {
    return this.http.put(this.endpointUrl+"UpdateInstitutions", institutions)
  }

// By using this method we will delete the Institutions based on the Id
DeleteInstitutions(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteInstitutions/" + id);
  }
}
