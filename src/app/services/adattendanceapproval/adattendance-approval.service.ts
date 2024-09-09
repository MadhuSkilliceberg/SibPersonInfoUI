import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AdattendanceApproval } from 'src/app/Models/AdAttendanceApproval';

@Injectable({
  providedIn: 'root'
})
export class AdattendanceApprovalService {

  endpointUrl!: string;

  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'AdattendanceApproval/';
  }

  // By using this method we will get the AdattendanceApproval records
  GetAdattendanceApprovals(): any {
    return this.http.get(this.endpointUrl + 'GetAdattendanceApprovals');
  }

  // By using this method we will get the AdattendanceApproval record based on the Id
  GetAdattendanceApprovalById(id: number): any {
    return this.http.get(this.endpointUrl + 'GetAdattendanceApprovalById/' + id);
  }

  // By using this method we will add a new AdattendanceApproval record
  AddAdattendanceApproval(adattendanceApproval: AdattendanceApproval): any {
    return this.http.post(this.endpointUrl + 'AddAdattendanceApproval', adattendanceApproval);
  }

  // By using this method we will update an existing AdattendanceApproval record
  UpdateAdattendanceApproval(adattendanceApproval: AdattendanceApproval): any {
    return this.http.put(this.endpointUrl + 'UpdateAdattendanceApproval', adattendanceApproval);
  }

  // By using this method we will delete an AdattendanceApproval record based on the Id
  DeleteAdattendanceApproval(id: number): any {
    return this.http.delete(this.endpointUrl + 'DeleteAdattendanceApproval/' + id);
  }
}
