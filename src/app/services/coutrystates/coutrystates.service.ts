import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CoutryStates } from '../../Models/CoutryStates';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoutryStatesService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'CoutryState/';
  }

   // By using this method we will get the CoutryStates 
  GetCoutryStates(): any {
    return this.http.get(this.endpointUrl+"GetCoutryStates");
  }
  
  // By using this method we will get the CoutryStates based on the Id
  GetCoutryStatesById(id: number): any {
    return this.http.get(this.endpointUrl+"GetCoutryStatesById/" + id);
  }

  // By uing this method we will Add the CoutryStates based on CoutryStates
  AddCoutryStates(coutrystates: CoutryStates): any {
    return this.http.post(this.endpointUrl+"AddCoutryStates", coutrystates)
  }

   // By uing this method we will Update the CoutryStates based on CoutryStates
   UpdateCoutryStates(coutrystates: CoutryStates): any {
    return this.http.put(this.endpointUrl+"UpdateCoutryStates", coutrystates)
  }

// By using this method we will delete the CoutryStates based on the Id
DeleteCoutryStates(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteCoutryStates/" + id);
  }
}
