import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TaskLog } from '../../Models/TaskLog';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskLogService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'TaskLog/';
  }

   // By using this method we will get the TaskLog 
  GetTaskLog(): any {
    return this.http.get(this.endpointUrl+"GetTaskLog");
  }
  
  // By using this method we will get the TaskLog based on the Id
  GetTaskLogById(id: number): any {
    return this.http.get(this.endpointUrl+"GetTaskLogById/" + id);
  }

  // By uing this method we will Add the TaskLog based on TaskLog
  AddTaskLog(tasklog: TaskLog): any {
    return this.http.post(this.endpointUrl+"AddTaskLog", tasklog)
  }

   // By uing this method we will Update the TaskLog based on TaskLog
   UpdateTaskLog(tasklog: TaskLog): any {
    return this.http.put(this.endpointUrl+"UpdateTaskLog", tasklog)
  }

// By using this method we will delete the TaskLog based on the Id
DeleteTaskLog(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteTaskLog/" + id);
  }
}
