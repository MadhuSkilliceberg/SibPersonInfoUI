import { Component, OnInit } from '@angular/core';
import { Vacancies } from 'src/app/Models/Vacancies';

import { Company } from 'src/app/Models/Company';
import { CompanyService } from 'src/app/services/company/company.service';
import { StatusService } from 'src/app/services/status/status.service';
import { Status } from 'src/app/Models/Status';
import { Roles } from 'src/app/Models/Roles';
import { RolesService } from 'src/app/services/roles/roles.service';
import { IndustryTypes } from 'src/app/Models/IndustryTypes';
import { IndustryTypesService } from 'src/app/services/industrytypes/industrytypes.service';
import { Departments } from 'src/app/Models/Departments';
import { DepartmentsService } from 'src/app/services/departments/departments.service';
import { EmploymentTypes } from 'src/app/Models/EmploymentTypes';
import { EmploymentTypesService } from 'src/app/services/employmenttypes/employmenttypes.service';
import { RoleCategory } from 'src/app/Models/RoleCategory';
import { RoleCategoryService } from 'src/app/services/rolecategory/rolecategory.service';
import { Question } from 'src/app/Models/Question';
import { QuestionService } from 'src/app/services/question.service';
import { Skill } from 'src/app/Models/UserData';
import { Skills } from 'src/app/Models/Skills';
import { SkillsService } from 'src/app/services/skills/skills.service';
import { QuestionCategoryService } from 'src/app/services/questioncategory.service';
import { QuestionTypeService } from 'src/app/services/questiontype.service';
import { QuestionCategory } from 'src/app/Models/QuestionCategory';
import { QuestionType } from 'src/app/Models/QuestionType';
import { LookUpService } from 'src/app/services/lookup/gender.service';
import { LookUp } from 'src/app/Models/LookUp';
import { LookUpValueservice } from 'src/app/services/lookup/look-up-values.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  question: Question = new Question();
  questionData: Question[] = []
  vacanciesId: number = 0;

  skillData: Skills[] = []
  statusData: Status[] = []
  QuestionCategoryData: QuestionCategory[] = []
   
  employmenttypesData: EmploymentTypes[] = []
  QuestionTypeData: LookUp[] = []
  Lookups: LookUp[] = [];



  constructor(
    private questionService: QuestionService,
    private skillsService: SkillsService,
    private statusService: StatusService,
    private   questiontypeService  :  QuestionTypeService,
    private   questionCategoryService  :  QuestionCategoryService,

    private lookUpService: LookUpValueservice,



  ) { }

  ngOnInit(): any {
    this.GetQuestion();
    this.GetSkills();
    this.GetStatus();
    this.GetLookUps();
    this.GetQuestioncategory();
    // this.GetDepartments();
    // this.GetEmploymentTypes();
    // this.GetRoleCategory();
  }

  
  // By using this method we will get the Users 
  GetLookUps(): any {
    this.lookUpService.GetLookUpValueByCode(["QUESTION_TYPE"]).subscribe((res: any) => {
      this.QuestionTypeData = res;
      debugger
      //this.QuestionTypeData= this.Lookups.filter(t=>t.Code)
      debugger

    })
  }
  // By using this method we will get the Vacancies 
  GetQuestion(): any {
    this.questionService.GetQuestion().subscribe((res: any) => {
      this.questionData = res;

    })
  }

  // By using this method we will get the Vacancies based on the Id
  GetQuestionById(Id: number): any {
    this.questionService.GetQuestionById(Id).subscribe((res: any) => {
      this.question = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Vacancies based on Vacancies
  AddQuestion(): any {
    this.questionService.AddQuestion(this.question).subscribe((res: any) => {
      this.GetQuestion();
      this.question = new Question();
    })
  }

  // By uing this method we will Update the Vacancies based on Vacancies
  UpdateQuestion(): any {
    this.questionService.UpdateQuestion(this.question).subscribe((res: any) => {
      this.GetQuestion();
      this.question = new Question();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

  // By using this method we will delete the Vacancies based on the Id
  DeleteQuestion(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.questionService.DeleteQuestion(Id).subscribe((res: any) => {
        this.GetQuestion();
        this.question = new Question();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetQuestion();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetQuestion();
  }

  // By using this method we will get the Company 
  GetSkills(): any {
    this.skillsService.GetSkills().subscribe((res: any) => {
      this.skillData = res;
    })
  }

  // By using this method we will get the Status 
  GetStatus(): any {
    this.statusService.GetStatus().subscribe((res: any) => {
      this.statusData = res;
    })
  }

  // By using this method we will get the Roles 
  GetQuestioncategory(): any {
    this.questionCategoryService.GetQuestionCategory().subscribe((res: any) => {
      this.QuestionCategoryData = res;
    })
  }
 
  // By using this method we will get the RoleCategory 
  GetQuestionType(): any {
    this.questiontypeService.GetQuestionType().subscribe((res: any) => {
      this.QuestionTypeData = res;

    })
  }


}

