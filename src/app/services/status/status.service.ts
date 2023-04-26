import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Status } from '../../Models/Status';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Status/';
  }

   // By using this method we will get the Status 
  GetStatus(): any {
    return this.http.get(this.endpointUrl+"GetStatus");
  }
  
  // By using this method we will get the Status based on the Id
  GetStatusById(id: number): any {
    return this.http.get(this.endpointUrl+"GetStatusById/" + id);
  }

  // By uing this method we will Add the Status based on Status
  AddStatus(status: Status): any {
    return this.http.post(this.endpointUrl+"AddStatus", status)
  }

   // By uing this method we will Update the Status based on Status
   UpdateStatus(status: Status): any {
    return this.http.put(this.endpointUrl+"UpdateStatus", status)
  }

// By using this method we will delete the Status based on the Id
DeleteStatus(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteStatus/" + id);
  }
}
