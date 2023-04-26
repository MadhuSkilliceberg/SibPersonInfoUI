import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Task } from '../../Models/Task';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Task/';
  }

   // By using this method we will get the Task 
  GetTask(): any {
    return this.http.get(this.endpointUrl+"GetTask");
  }
  
  // By using this method we will get the Task based on the Id
  GetTaskById(id: number): any {
    return this.http.get(this.endpointUrl+"GetTaskById/" + id);
  }

  // By uing this method we will Add the Task based on Task
  AddTask(task: Task): any {
    return this.http.post(this.endpointUrl+"AddTask", task)
  }

   // By uing this method we will Update the Task based on Task
   UpdateTask(task: Task): any {
    return this.http.put(this.endpointUrl+"UpdateTask", task)
  }

// By using this method we will delete the Task based on the Id
DeleteTask(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteTask/" + id);
  }
}
