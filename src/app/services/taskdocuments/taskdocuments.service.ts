import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TaskDocuments } from '../../Models/TaskDocuments';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskDocumentsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'TaskDocuments/';
  }

   // By using this method we will get the TaskDocuments 
  GetTaskDocuments(): any {
    return this.http.get(this.endpointUrl+"GetTaskDocuments");
  }
  
  // By using this method we will get the TaskDocuments based on the Id
  GetTaskDocumentsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetTaskDocumentsById/" + id);
  }

  // By uing this method we will Add the TaskDocuments based on TaskDocuments
  AddTaskDocuments(taskdocuments: TaskDocuments): any {
    return this.http.post(this.endpointUrl+"AddTaskDocuments", taskdocuments)
  }

   // By uing this method we will Update the TaskDocuments based on TaskDocuments
   UpdateTaskDocuments(taskdocuments: TaskDocuments): any {
    return this.http.put(this.endpointUrl+"UpdateTaskDocuments", taskdocuments)
  }

// By using this method we will delete the TaskDocuments based on the Id
DeleteTaskDocuments(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteTaskDocuments/" + id);
  }
}
