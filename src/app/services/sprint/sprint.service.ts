import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Sprint } from '../../Models/Sprint';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Sprint/';
  }

   // By using this method we will get the Sprint 
  GetSprint(): any {
    return this.http.get(this.endpointUrl+"GetSprint");
  }
  
  // By using this method we will get the Sprint based on the Id
  GetSprintById(id: number): any {
    return this.http.get(this.endpointUrl+"GetSprintById/" + id);
  }

  // By uing this method we will Add the Sprint based on Sprint
  AddSprint(sprint: Sprint): any {
    return this.http.post(this.endpointUrl+"AddSprint", sprint)
  }

   // By uing this method we will Update the Sprint based on Sprint
   UpdateSprint(sprint: Sprint): any {
    return this.http.put(this.endpointUrl+"UpdateSprint", sprint)
  }

// By using this method we will delete the Sprint based on the Id
DeleteSprint(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteSprint/" + id);
  }
}
