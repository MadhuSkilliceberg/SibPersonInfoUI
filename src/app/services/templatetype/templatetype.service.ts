import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TemplateType } from '../../Models/TemplateType';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplateTypeService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'TemplateType/';
  }

   // By using this method we will get the TemplateType 
  GetTemplateType(): any {
    return this.http.get(this.endpointUrl+"GetTemplateType");
  }
  
  // By using this method we will get the TemplateType based on the Id
  GetTemplateTypeById(id: number): any {
    return this.http.get(this.endpointUrl+"GetTemplateTypeById/" + id);
  }

  // By uing this method we will Add the TemplateType based on TemplateType
  AddTemplateType(templatetype: TemplateType): any {
    return this.http.post(this.endpointUrl+"AddTemplateType", templatetype)
  }

   // By uing this method we will Update the TemplateType based on TemplateType
   UpdateTemplateType(templatetype: TemplateType): any {
    return this.http.put(this.endpointUrl+"UpdateTemplateType", templatetype)
  }

// By using this method we will delete the TemplateType based on the Id
DeleteTemplateType(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteTemplateType/" + id);
  }
}
