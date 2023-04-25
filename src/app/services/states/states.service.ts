import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { States } from '../../Models/States';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'States';
  }

   // By using this method we will get the States 
  GetStates(): any {
    return this.http.get(this.endpointUrl+"GetStates");
  }
  
  // By using this method we will get the States based on the Id
  GetStatesById(id: number): any {
    return this.http.get(this.endpointUrl+"GetStatesById/" + id);
  }

  // By uing this method we will Add the States based on States
  AddStates(states: States): any {
    return this.http.post(this.endpointUrl+"AddStates", states)
  }

   // By uing this method we will Update the States based on States
   UpdateStates(states: States): any {
    return this.http.put(this.endpointUrl+"UpdateStates", states)
  }

// By using this method we will delete the States based on the Id
DeleteStates(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteStates/" + id);
  }
}
