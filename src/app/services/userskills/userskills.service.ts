import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserSkills } from '../../Models/UserSkills';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserSkillsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'UserSkill/';
  }

   // By using this method we will get the UserSkills 
  GetUserSkills(): any {
    return this.http.get(this.endpointUrl+"GetUserSkills");
  }
  
  // By using this method we will get the UserSkills based on the Id
  GetUserSkillsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetUserSkillsById/" + id);
  }

  // By uing this method we will Add the UserSkills based on UserSkills
  AddUserSkills(userskills: UserSkills): any {
    return this.http.post(this.endpointUrl+"AddUserSkills", userskills)
  }

   // By uing this method we will Update the UserSkills based on UserSkills
   UpdateUserSkills(userskills: UserSkills): any {
    return this.http.put(this.endpointUrl+"UpdateUserSkills", userskills)
  }

// By using this method we will delete the UserSkills based on the Id
DeleteUserSkills(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteUserSkills/" + id);
  }
}
