import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SprintTasks } from '../../Models/SprintTasks';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SprintTasksService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'SprintTasks';
  }

   // By using this method we will get the SprintTasks 
  GetSprintTasks(): any {
    return this.http.get(this.endpointUrl+"GetSprintTasks");
  }
  
  // By using this method we will get the SprintTasks based on the Id
  GetSprintTasksById(id: number): any {
    return this.http.get(this.endpointUrl+"GetSprintTasksById/" + id);
  }

  // By uing this method we will Add the SprintTasks based on SprintTasks
  AddSprintTasks(sprinttasks: SprintTasks): any {
    return this.http.post(this.endpointUrl+"AddSprintTasks", sprinttasks)
  }

   // By uing this method we will Update the SprintTasks based on SprintTasks
   UpdateSprintTasks(sprinttasks: SprintTasks): any {
    return this.http.put(this.endpointUrl+"UpdateSprintTasks", sprinttasks)
  }

// By using this method we will delete the SprintTasks based on the Id
DeleteSprintTasks(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteSprintTasks/" + id);
  }
}
