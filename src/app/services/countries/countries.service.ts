import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Countries } from '../../Models/Countries';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Country/';
  }

   // By using this method we will get the Countries 
  GetCountries(): any {
    return this.http.get(this.endpointUrl+"GetCountries");
  }
  
  // By using this method we will get the Countries based on the Id
  GetCountriesById(id: number): any {
    return this.http.get(this.endpointUrl+"GetCountriesById/" + id);
  }

  // By uing this method we will Add the Countries based on Countries
  AddCountries(countries: Countries): any {
    return this.http.post(this.endpointUrl+"AddCountries", countries)
  }

   // By uing this method we will Update the Countries based on Countries
   UpdateCountries(countries: Countries): any {
    return this.http.put(this.endpointUrl+"UpdatetCountries", countries)
  }

// By using this method we will delete the Countries based on the Id
DeleteCountries(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteCountries/" + id);
  }
}
