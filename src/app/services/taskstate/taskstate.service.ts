import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TaskState } from '../../Models/TaskState';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskStateService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'TaskState';
  }

   // By using this method we will get the TaskState 
  GetTaskState(): any {
    return this.http.get(this.endpointUrl+"GetTaskState");
  }
  
  // By using this method we will get the TaskState based on the Id
  GetTaskStateById(id: number): any {
    return this.http.get(this.endpointUrl+"GetTaskStateById/" + id);
  }

  // By uing this method we will Add the TaskState based on TaskState
  AddTaskState(taskstate: TaskState): any {
    return this.http.post(this.endpointUrl+"AddTaskState", taskstate)
  }

   // By uing this method we will Update the TaskState based on TaskState
   UpdateTaskState(taskstate: TaskState): any {
    return this.http.put(this.endpointUrl+"UpdateTaskState", taskstate)
  }

// By using this method we will delete the TaskState based on the Id
DeleteTaskState(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteTaskState/" + id);
  }
}
