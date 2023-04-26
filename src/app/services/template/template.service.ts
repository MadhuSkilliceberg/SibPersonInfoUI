import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Template } from '../../Models/Template';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Template/';
  }

   // By using this method we will get the Template 
  GetTemplate(): any {
    return this.http.get(this.endpointUrl+"GetTemplate");
  }
  
  // By using this method we will get the Template based on the Id
  GetTemplateById(id: number): any {
    return this.http.get(this.endpointUrl+"GetTemplateById/" + id);
  }

  // By uing this method we will Add the Template based on Template
  AddTemplate(template: Template): any {
    return this.http.post(this.endpointUrl+"AddTemplate", template)
  }

   // By uing this method we will Update the Template based on Template
   UpdateTemplate(template: Template): any {
    return this.http.put(this.endpointUrl+"UpdateTemplate", template)
  }

// By using this method we will delete the Template based on the Id
DeleteTemplate(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteTemplate/" + id);
  }
}
