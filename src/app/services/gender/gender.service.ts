import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Gender } from '../../Models/Gender';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Gender';
  }

   // By using this method we will get the Gender 
  GetGender(): any {
    return this.http.get(this.endpointUrl+"GetGender");
  }
  
  // By using this method we will get the Gender based on the Id
  GetGenderById(id: number): any {
    return this.http.get(this.endpointUrl+"GetGenderById/" + id);
  }

  // By uing this method we will Add the Gender based on Gender
  AddGender(gender: Gender): any {
    return this.http.post(this.endpointUrl+"AddGender", gender)
  }

   // By uing this method we will Update the Gender based on Gender
   UpdateGender(gender: Gender): any {
    return this.http.put(this.endpointUrl+"UpdateGender", gender)
  }

// By using this method we will delete the Gender based on the Id
DeleteGender(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteGender/" + id);
  }
}
