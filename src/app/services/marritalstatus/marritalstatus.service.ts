import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MarritalStatus } from '../../Models/MarritalStatus';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarritalStatusService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'MarritalStatus/';
  }

   // By using this method we will get the MarritalStatus 
  GetMarritalStatus(): any {
    return this.http.get(this.endpointUrl+"GetMarritalStatus");
  }
  
  // By using this method we will get the MarritalStatus based on the Id
  GetMarritalStatusById(id: number): any {
    return this.http.get(this.endpointUrl+"GetMarritalStatusById/" + id);
  }

  // By uing this method we will Add the MarritalStatus based on MarritalStatus
  AddMarritalStatus(marritalstatus: MarritalStatus): any {
    return this.http.post(this.endpointUrl+"AddMarritalStatus", marritalstatus)
  }

   // By uing this method we will Update the MarritalStatus based on MarritalStatus
   UpdateMarritalStatus(marritalstatus: MarritalStatus): any {
    return this.http.put(this.endpointUrl+"UpdateMarritalStatus", marritalstatus)
  }

// By using this method we will delete the MarritalStatus based on the Id
DeleteMarritalStatus(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteMarritalStatus/" + id);
  }
}
