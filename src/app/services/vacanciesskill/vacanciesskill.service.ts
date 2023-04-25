import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { VacanciesSkill } from '../../Models/VacanciesSkill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VacanciesSkillService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'VacanciesSkill';
  }

   // By using this method we will get the VacanciesSkill 
  GetVacanciesSkill(): any {
    return this.http.get(this.endpointUrl+"GetVacanciesSkill");
  }
  
  // By using this method we will get the VacanciesSkill based on the Id
  GetVacanciesSkillById(id: number): any {
    return this.http.get(this.endpointUrl+"GetVacanciesSkillById/" + id);
  }

  // By uing this method we will Add the VacanciesSkill based on VacanciesSkill
  AddVacanciesSkill(vacanciesskill: VacanciesSkill): any {
    return this.http.post(this.endpointUrl+"AddVacanciesSkill", vacanciesskill)
  }

   // By uing this method we will Update the VacanciesSkill based on VacanciesSkill
   UpdateVacanciesSkill(vacanciesskill: VacanciesSkill): any {
    return this.http.put(this.endpointUrl+"UpdateVacanciesSkill", vacanciesskill)
  }

// By using this method we will delete the VacanciesSkill based on the Id
DeleteVacanciesSkill(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteVacanciesSkill/" + id);
  }
}
