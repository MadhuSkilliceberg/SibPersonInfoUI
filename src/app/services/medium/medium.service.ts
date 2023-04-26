import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Medium } from '../../Models/Medium';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediumService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Medium/';
  }

   // By using this method we will get the Medium 
  GetMedium(): any {
    return this.http.get(this.endpointUrl+"GetMedium");
  }
  
  // By using this method we will get the Medium based on the Id
  GetMediumById(id: number): any {
    return this.http.get(this.endpointUrl+"GetMediumById/" + id);
  }

  // By uing this method we will Add the Medium based on Medium
  AddMedium(medium: Medium): any {
    return this.http.post(this.endpointUrl+"AddMedium", medium)
  }

   // By uing this method we will Update the Medium based on Medium
   UpdateMedium(medium: Medium): any {
    return this.http.put(this.endpointUrl+"UpdatetMedium", medium)
  }

// By using this method we will delete the Medium based on the Id
DeleteMedium(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteMedium/" + id);
  }
}
