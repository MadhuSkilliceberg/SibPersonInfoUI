import { Injectable } from '@angular/core';

import { QuestionCategory } from '../Models/QuestionCategory';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionCategoryService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'QuestionCategory/';
  }

   // By using this method we will get the QuestionCategory 
  GetQuestionCategory(): any {
    return this.http.get(this.endpointUrl+"GetQuestionCategories");
  }
  
  // By using this method we will get the QuestionCategory based on the Id
  GetQuestionCategoryById(id: number): any {
    return this.http.get(this.endpointUrl+"GetQuestionCategoryById/" + id);
  }

  // By uing this method we will Add the QuestionCategory based on QuestionCategory
  AddQuestionCategory(QuestionCategory: QuestionCategory): any {
    return this.http.post(this.endpointUrl+"AddQuestionCategory", QuestionCategory)
  }

   // By uing this method we will Update the QuestionCategory based on QuestionCategory
   UpdateQuestionCategory(QuestionCategory: QuestionCategory): any {
    return this.http.put(this.endpointUrl+"UpdateQuestionCategory", QuestionCategory)
  }

// By using this method we will delete the QuestionCategory based on the Id
DeleteQuestionCategory(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteQuestionCategory/" + id);
  }
}
