import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Vacancies } from '../../Models/Vacancies';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Vacancy/';
  }

   // By using this method we will get the Vacancies 
  GetVacancies(): any {
    return this.http.get(this.endpointUrl+"GetVacancies");
  }
  
  // By using this method we will get the Vacancies based on the Id
  GetVacanciesById(id: number): any {
    return this.http.get(this.endpointUrl+"GetVacanciesById/" + id);
  }

  // By uing this method we will Add the Vacancies based on Vacancies
  AddVacancies(vacancies: Vacancies): any {
    return this.http.post(this.endpointUrl+"AddVacancies", vacancies)
  }

   // By uing this method we will Update the Vacancies based on Vacancies
   UpdateVacancies(vacancies: Vacancies): any {
    return this.http.put(this.endpointUrl+"UpdateVacancies", vacancies)
  }

// By using this method we will delete the Vacancies based on the Id
DeleteVacancies(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteVacancies/" + id);
  }
}
