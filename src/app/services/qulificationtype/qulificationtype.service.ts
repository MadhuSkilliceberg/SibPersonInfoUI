import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { QulificationType } from '../../Models/QulificationType';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QulificationTypeService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'QulificationType';
  }

   // By using this method we will get the QulificationType 
  GetQulificationType(): any {
    return this.http.get(this.endpointUrl+"GetQulificationType");
  }
  
  // By using this method we will get the QulificationType based on the Id
  GetQulificationTypeById(id: number): any {
    return this.http.get(this.endpointUrl+"GetQulificationTypeById/" + id);
  }

  // By uing this method we will Add the QulificationType based on QulificationType
  AddQulificationType(qulificationtype: QulificationType): any {
    return this.http.post(this.endpointUrl+"AddQulificationType", qulificationtype)
  }

   // By uing this method we will Update the QulificationType based on QulificationType
   UpdateQulificationType(qulificationtype: QulificationType): any {
    return this.http.put(this.endpointUrl+"UpdateQulificationType", qulificationtype)
  }

// By using this method we will delete the QulificationType based on the Id
DeleteQulificationType(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteQulificationType/" + id);
  }
}
