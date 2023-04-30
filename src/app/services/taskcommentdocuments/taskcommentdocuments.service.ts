import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TaskCommentDocuments } from '../../Models/TaskCommentDocuments';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskCommentDocumentsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'TaskCommentDocument/';
  }

   // By using this method we will get the TaskCommentDocuments 
  GetTaskCommentDocuments(): any {
    return this.http.get(this.endpointUrl+"GetTaskCommentDocuments");
  }
  
  // By using this method we will get the TaskCommentDocuments based on the Id
  GetTaskCommentDocumentsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetTaskCommentDocumentsById/" + id);
  }

  // By uing this method we will Add the TaskCommentDocuments based on TaskCommentDocuments
  AddTaskCommentDocuments(taskcommentdocuments: TaskCommentDocuments): any {
    return this.http.post(this.endpointUrl+"AddTaskCommentDocuments", taskcommentdocuments)
  }

   // By uing this method we will Update the TaskCommentDocuments based on TaskCommentDocuments
   UpdateTaskCommentDocuments(taskcommentdocuments: TaskCommentDocuments): any {
    return this.http.put(this.endpointUrl+"UpdateTaskCommentDocuments", taskcommentdocuments)
  }

// By using this method we will delete the TaskCommentDocuments based on the Id
DeleteTaskCommentDocuments(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteTaskCommentDocuments/" + id);
  }
}
