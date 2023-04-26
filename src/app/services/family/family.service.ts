import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Family } from '../../Models/Family';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Family/';
  }

   // By using this method we will get the Family 
  GetFamily(): any {
    return this.http.get(this.endpointUrl+"GetFamilies");
  }
  
  // By using this method we will get the Family based on the Id
  GetFamilyById(id: number): any {
    return this.http.get(this.endpointUrl+"GetFamilyById/" + id);
  }

  // By uing this method we will Add the Family based on Family
  AddFamily(family: Family): any {
    return this.http.post(this.endpointUrl+"AddFamily", family)
  }

   // By uing this method we will Update the Family based on Family
   UpdateFamily(family: Family): any {
    return this.http.put(this.endpointUrl+"UpdateFamily", family)
  }

// By using this method we will delete the Family based on the Id
DeleteFamily(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteFamily/" + id);
  }
}
