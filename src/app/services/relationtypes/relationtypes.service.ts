import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RelationTypes } from '../../Models/RelationTypes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelationTypesService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'RelationType/';
  }

   // By using this method we will get the RelationTypes 
  GetRelationTypes(): any {
    return this.http.get(this.endpointUrl+"GetRelationTypes");
  }
  
  // By using this method we will get the RelationTypes based on the Id
  GetRelationTypesById(id: number): any {
    return this.http.get(this.endpointUrl+"GetRelationTypesById/" + id);
  }

  // By uing this method we will Add the RelationTypes based on RelationTypes
  AddRelationTypes(relationtypes: RelationTypes): any {
    return this.http.post(this.endpointUrl+"AddRelationTypes", relationtypes)
  }

   // By uing this method we will Update the RelationTypes based on RelationTypes
   UpdateRelationTypes(relationtypes: RelationTypes): any {
    return this.http.put(this.endpointUrl+"UpdateRelationTypes", relationtypes)
  }

// By using this method we will delete the RelationTypes based on the Id
DeleteRelationTypes(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteRelationTypes/" + id);
  }
}
