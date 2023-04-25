import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Skills } from '../../Models/Skills';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Skills';
  }

   // By using this method we will get the Skills 
  GetSkills(): any {
    return this.http.get(this.endpointUrl+"GetSkills");
  }
  
  // By using this method we will get the Skills based on the Id
  GetSkillsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetSkillsById/" + id);
  }

  // By uing this method we will Add the Skills based on Skills
  AddSkills(skills: Skills): any {
    return this.http.post(this.endpointUrl+"AddSkills", skills)
  }

   // By uing this method we will Update the Skills based on Skills
   UpdateSkills(skills: Skills): any {
    return this.http.put(this.endpointUrl+"UpdateSkills", skills)
  }

// By using this method we will delete the Skills based on the Id
DeleteSkills(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteSkills/" + id);
  }
}
