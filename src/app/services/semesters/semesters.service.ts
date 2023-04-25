import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Semesters } from '../../Models/Semesters';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SemestersService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Semesters';
  }

   // By using this method we will get the Semesters 
  GetSemesters(): any {
    return this.http.get(this.endpointUrl+"GetSemesters");
  }
  
  // By using this method we will get the Semesters based on the Id
  GetSemestersById(id: number): any {
    return this.http.get(this.endpointUrl+"GetSemestersById/" + id);
  }

  // By uing this method we will Add the Semesters based on Semesters
  AddSemesters(semesters: Semesters): any {
    return this.http.post(this.endpointUrl+"AddSemesters", semesters)
  }

   // By uing this method we will Update the Semesters based on Semesters
   UpdateSemesters(semesters: Semesters): any {
    return this.http.put(this.endpointUrl+"UpdateSemesters", semesters)
  }

// By using this method we will delete the Semesters based on the Id
DeleteSemesters(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteSemesters/" + id);
  }
}
