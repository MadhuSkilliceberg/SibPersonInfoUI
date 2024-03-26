import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Question } from '../Models/Question';
import { ExamQuestion } from '../Models/ExamQuestion';
import { UserExamQuestionsAudit } from '../Models/UserExamQuestionsAudit';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Question/';
  }

   // By using this method we will get the Question 
  GetQuestion(): any {
    return this.http.get(this.endpointUrl+"GetQuestions");
  }
  
  // By using this method we will get the Question based on the Id
  GetQuestionById(id: number): any {
    return this.http.get(this.endpointUrl+"GetQuestionById/" + id);
  }

  // By uing this method we will Add the Question based on Question
  AddQuestion(Question: Question): any {
    return this.http.post(this.endpointUrl+"AddQuestion", Question)
  }

   // By uing this method we will Update the Question based on Question
   UpdateQuestion(Question: Question): any {
    return this.http.put(this.endpointUrl+"UpdateQuestion", Question)
  }

// By using this method we will delete the Question based on the Id
DeleteQuestion(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteQuestion/" + id);
  }


  // By using this method we will get the Question 
  GetExam(): any {
    return this.http.get(this.endpointUrl+"GetExams");
  }
  
  // By using this method we will get the Question based on the Id
  GetExamsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetExamsById/" + id);
  }

  
  // By using this method we will get the Question based on the Id
  GetUserExamQuestionsByExamId(id: number): any {
    return this.http.get(this.endpointUrl+"GetUserExamQuestionsByExamId/" + id);
  }


   // By uing this method we will Add the Question based on Question
   InsertUserExamQuestionRange(Question: ExamQuestion): any {
    return this.http.post(this.endpointUrl+"InsertUserExamQuestionRange", Question)
  }

 // By uing this method we will Add the Question based on Question
 UpdateUserExamQuestionRange(Question: ExamQuestion[]): any {
  return this.http.post(this.endpointUrl+"UpdateUserExamQuestionRange", Question)
}

   // By uing this method we will Add the Question based on Question
   SaveUserExamQuestionsAudit(userExamQuestionsAudit: UserExamQuestionsAudit): any {
    return this.http.post(this.endpointUrl+"SaveUserExamQuestionsAudit", Question)
  }

}
