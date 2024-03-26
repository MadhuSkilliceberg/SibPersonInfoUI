import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LookUp } from '../../Models/LookUp';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LookUpService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'LookUp/';
  }

   // By using this method we will get the LookUp 
  GetLookUp(): any {
    return this.http.get(this.endpointUrl+"GetLookUp");
  }

  GetLookUps1(): any {
    return this.http.get(this.endpointUrl+"GetLookUps1");
  }
   
  
  // By using this method we will get the LookUp based on the Id
  GetLookUpById(id: number): any {
    return this.http.get(this.endpointUrl+"GetLookUpById/" + id);
  }

  // By uing this method we will Add the LookUp based on LookUp
  AddLookUp(LookUp: LookUp): any {
    return this.http.post(this.endpointUrl+"AddLookUp", LookUp)
  }

   // By uing this method we will Update the LookUp based on LookUp
   UpdateLookUp(LookUp: LookUp): any {
    return this.http.put(this.endpointUrl+"UpdateLookUp", LookUp)
  }

// By using this method we will delete the LookUp based on the Id
DeleteLookUp(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteLookUp/" + id);
  }
}
