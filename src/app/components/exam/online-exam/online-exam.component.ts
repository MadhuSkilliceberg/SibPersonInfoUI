import { Component, OnInit } from '@angular/core';
import { ExamQuestion } from 'src/app/Models/ExamQuestion';
import { UserExamQuestionsAudit } from 'src/app/Models/UserExamQuestionsAudit';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-online-exam',
  templateUrl: './online-exam.component.html',
  styleUrls: ['./online-exam.component.css']
})
export class OnlineExamComponent implements OnInit {
  examQuestions!: ExamQuestion[];
  examQuestionItem: ExamQuestion = new ExamQuestion();
  selectionQuestionId!: number;
  userExamQuestionsAudit!: UserExamQuestionsAudit;
  name = 'Angular ';
  display: any;
  public timerInterval: any;
  constructor(
    private questionService: QuestionService,
  ) { }

  ngOnInit(): any {
    this.GetUserExamQuestionsByExamId();

  }
  // By using this method we will get the Vacancies 
  GetUserExamQuestionsByExamId(): any {
    this.questionService.GetUserExamQuestionsByExamId(5).subscribe((res: any) => {
      debugger
      this.examQuestions = res;
      this.examQuestions[0].IsShow = true;
      //initial data
      this.selectionQuestionId = this.examQuestions[0].Id;
    })
  }


  OnPage(index: number) {
    var data = this.examQuestions.find(t => t.IsShow == true);
    if (data != undefined)
      data.IsShow = false;
    var valueAtIndex1 = this.examQuestions.find(t => t.Id == index);
    if (valueAtIndex1 != undefined) {
      valueAtIndex1.IsShow = true;
      this.selectionQuestionId = valueAtIndex1.Id;
    }
  }


  OnPageIndex(index: number) {
    var data = this.examQuestions.find(t => t.IsShow == true);
    if (data != undefined)
      data.IsShow = false;
    var valueAtIndex1 = this.examQuestions.at(index);
    if (valueAtIndex1 != undefined) {
      valueAtIndex1.IsShow = true;
      this.selectionQuestionId = valueAtIndex1.Id;
    }
  }

  OnSelectionAnswer(examQuestionItem: ExamQuestion, sId: number) {
    examQuestionItem.Answer = String(sId);
  }

  OnMarkAsReview(examQuestionItem: ExamQuestion) {
    if (examQuestionItem.MarkAsReview == undefined||examQuestionItem.MarkAsReview <1)
       examQuestionItem.MarkAsReview = 1
      else
      examQuestionItem.MarkAsReview = 0;
    // if (examQuestionItem.MarkAsReview == undefined)
    //   examQuestionItem.MarkAsReview = 1
    // else {
    //   examQuestionItem.MarkAsReview += examQuestionItem.MarkAsReview;
    // }
  }



  OnSave() {
    console.log(this.examQuestions);
    this.questionService.UpdateUserExamQuestionRange(this.examQuestions).subscribe((res: any) => {
      debugger
      var data=res;
    })
  }

  

  SaveUserExamQuestionsAudit() {
    
    console.log(this.examQuestions);
    this.questionService.SaveUserExamQuestionsAudit(this.userExamQuestionsAudit).subscribe((res: any) => {
      debugger
      var data=res;
    })
  }


  OnSkip(){
    
  }

  start() {
    this.timer(2);
  }
  stop() {
    clearInterval(this.timerInterval);
  }

  timer(minute: any) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = '0';
    let statSec: number = 60;

    const prefix = minute < 10 ? '0' : '';

    this.timerInterval = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = '0' + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log('finished');
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

}
