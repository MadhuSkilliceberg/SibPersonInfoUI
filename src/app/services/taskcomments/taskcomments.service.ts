import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TaskComments } from '../../Models/TaskComments';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskCommentsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'TaskComments/';
  }

   // By using this method we will get the TaskComments 
  GetTaskComments(): any {
    return this.http.get(this.endpointUrl+"GetTaskComments");
  }
  
  // By using this method we will get the TaskComments based on the Id
  GetTaskCommentsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetTaskCommentsById/" + id);
  }

  // By uing this method we will Add the TaskComments based on TaskComments
  AddTaskComments(taskcomments: TaskComments): any {
    return this.http.post(this.endpointUrl+"AddTaskComments", taskcomments)
  }

   // By uing this method we will Update the TaskComments based on TaskComments
   UpdateTaskComments(taskcomments: TaskComments): any {
    return this.http.put(this.endpointUrl+"UpdateTaskComments", taskcomments)
  }

// By using this method we will delete the TaskComments based on the Id
DeleteTaskComments(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteTaskComments/" + id);
  }
}
