import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Exam } from 'src/app/Models/Exam';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-exam-selection',
  templateUrl: './exam-selection.component.html',
  styleUrls: ['./exam-selection.component.css']
})
export class ExamSelectionComponent implements OnInit {
  Exams: Exam[] = [];
  constructor(
    private questionService: QuestionService,
    private router : Router) {

  }


  ngOnInit(): any {
    this.GetExam();
  }

  // By using this method we will get the Vacancies 
  GetExam(): any {
    this.questionService.GetExam().subscribe((res: any) => {
      this.Exams = res;

    })
  }

  onExam(id:number) {
    this.router.navigate(['OnlineExam'],
        {queryParams: {Id: id}});
}

}
