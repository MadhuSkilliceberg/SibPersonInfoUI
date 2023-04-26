import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IndustryTypes } from '../../Models/IndustryTypes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndustryTypesService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'IndustryTypes/';
  }

   // By using this method we will get the IndustryTypes 
  GetIndustryTypes(): any {
    return this.http.get(this.endpointUrl+"GetIndustryTypes");
  }
  
  // By using this method we will get the IndustryTypes based on the Id
  GetIndustryTypesById(id: number): any {
    return this.http.get(this.endpointUrl+"GetIndustryTypesById/" + id);
  }

  // By uing this method we will Add the IndustryTypes based on IndustryTypes
  AddIndustryTypes(industrytypes: IndustryTypes): any {
    return this.http.post(this.endpointUrl+"AddIndustryTypes", industrytypes)
  }

   // By uing this method we will Update the IndustryTypes based on IndustryTypes
   UpdateIndustryTypes(industrytypes: IndustryTypes): any {
    return this.http.put(this.endpointUrl+"UpdateIndustryTypes", industrytypes)
  }

// By using this method we will delete the IndustryTypes based on the Id
DeleteIndustryTypes(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteIndustryTypes/" + id);
  }
}
