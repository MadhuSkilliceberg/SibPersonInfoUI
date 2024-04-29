import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobPost } from 'src/app/Models/CompanyJobPost';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobPostService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Job/';
  }

   // By using this method we will get the JobPosts 
  GetJobPosts(): any {
    return this.http.get(this.endpointUrl+"GetJobs");
  }
  
  // By using this method we will get the JobPosts based on the Id
  GetJobPostsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetJobsById/" + id);
  }

  // By uing this method we will Add the JobPosts based on JobPosts
  AddJobPosts(jobPost: JobPost): any {
    return this.http.post(this.endpointUrl+"AddJobs", jobPost)
  }   

   // By uing this method we will Update the JobPosts based on JobPosts
   UpdateJobPosts(jobPost: JobPost): any {
    return this.http.put(this.endpointUrl+"UpdateJobs", jobPost)
  }

// By using this method we will delete the JobPosts based on the Id
DeleteJobPosts(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteJobs/" + id);
  }
}

