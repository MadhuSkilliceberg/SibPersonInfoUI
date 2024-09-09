import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adattendance } from '../../Models/AdAttendance';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdAttendanceService {

  endpointUrl!: string;

  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'AdAttendance/';
  }

  // By using this method we will get the AdAttendance records
  GetAdAttendances(): any {
    return this.http.get(this.endpointUrl + 'GetAdAttendances');
  }

  // By using this method we will get the AdAttendance record based on the Id
  GetAdAttendanceById(id: number): any {
    return this.http.get(this.endpointUrl + 'GetAdAttendanceById/' + id);
  }

  // By using this method we will add a new AdAttendance record
  AddAdAttendance(adAttendance: Adattendance): any {
    return this.http.post(this.endpointUrl + 'AddAdAttendance', adAttendance);
  }

  // By using this method we will update an existing AdAttendance record
  UpdateAdAttendance(adAttendance: Adattendance): any {
    return this.http.put(this.endpointUrl + 'UpdateAdAttendance', adAttendance);
  }

  // By using this method we will delete an AdAttendance record based on the Id
  DeleteAdAttendance(id: number): any {
    return this.http.delete(this.endpointUrl + 'DeleteAdAttendances/' + id);
  }
}
