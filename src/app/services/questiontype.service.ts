import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QuestionType } from '../Models/QuestionType';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypeService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'QuestionType/';
  }

   // By using this method we will get the QuestionType 
  GetQuestionType(): any {
    return this.http.get(this.endpointUrl+"GetQuestionType");
  }
  
  // By using this method we will get the QuestionType based on the Id
  GetQuestionTypeById(id: number): any {
    return this.http.get(this.endpointUrl+"GetQuestionTypeById/" + id);
  }

  // By uing this method we will Add the QuestionType based on QuestionType
  AddQuestionType(QuestionType: QuestionType): any {
    return this.http.post(this.endpointUrl+"AddQuestionType", QuestionType)
  }

   // By uing this method we will Update the QuestionType based on QuestionType
   UpdateQuestionType(QuestionType: QuestionType): any {
    return this.http.put(this.endpointUrl+"UpdateQuestionType", QuestionType)
  }

// By using this method we will delete the QuestionType based on the Id
DeleteQuestionType(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteQuestionType/" + id);
  }
}
