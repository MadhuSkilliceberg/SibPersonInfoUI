import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { YearSemester } from '../../Models/YearSemester';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YearSemesterService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'YearSemester';
  }

   // By using this method we will get the YearSemester 
  GetYearSemester(): any {
    return this.http.get(this.endpointUrl+"GetYearSemester");
  }
  
  // By using this method we will get the YearSemester based on the Id
  GetYearSemesterById(id: number): any {
    return this.http.get(this.endpointUrl+"GetYearSemesterById/" + id);
  }

  // By uing this method we will Add the YearSemester based on YearSemester
  AddYearSemester(yearsemester: YearSemester): any {
    return this.http.post(this.endpointUrl+"AddYearSemester", yearsemester)
  }

   // By uing this method we will Update the YearSemester based on YearSemester
   UpdateYearSemester(yearsemester: YearSemester): any {
    return this.http.put(this.endpointUrl+"UpdateYearSemester", yearsemester)
  }

// By using this method we will delete the YearSemester based on the Id
DeleteYearSemester(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteYearSemester/" + id);
  }
}
