import { Component, OnInit } from '@angular/core';
import { VacanciesSkill } from 'src/app/Models/VacanciesSkill';
import { VacanciesSkillService } from './../../services/vacanciesskill/vacanciesskill.service'
import { Vacancies } from 'src/app/Models/Vacancies';
import { VacanciesService } from 'src/app/services/vacancies/vacancies.service';
import { SkillsService } from 'src/app/services/skills/skills.service';
import { Skills } from 'src/app/Models/Skills';


@Component({
  selector: 'app-VacanciesSkill',
  templateUrl: './VacanciesSkill.component.html',
  styleUrls: ['./VacanciesSkill.component.css']
})
export class VacanciesSkillComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  vacanciesskill: VacanciesSkill = new VacanciesSkill();
  vacanciesskillData: VacanciesSkill[] = []
  vacanciesskillId: number = 0;

  vacanciesData: Vacancies[] = []
  skillsData: Skills[] = []



  constructor(
    private vacanciesskillService: VacanciesSkillService,
    private vacanciesService: VacanciesService,
    private skillsService: SkillsService,


  ) { }

  ngOnInit(): any {
    this.GetVacanciesSkill();
    this.GetSkills();
    this. GetVacancies();
  }

  // By using this method we will get the VacanciesSkill 
  GetVacanciesSkill(): any {
    this.vacanciesskillService.GetVacanciesSkill().subscribe((res: any) => {
      this.vacanciesskillData = res;

    })
  }

  // By using this method we will get the VacanciesSkill based on the Id
  GetVacanciesSkillById(Id: number): any {
    this.vacanciesskillService.GetVacanciesSkillById(Id).subscribe((res: any) => {
      this.vacanciesskill = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the VacanciesSkill based on VacanciesSkill
  AddVacanciesSkill(): any {
    this.vacanciesskillService.AddVacanciesSkill(this.vacanciesskill).subscribe((res: any) => {
      this.GetVacanciesSkill();
      this.vacanciesskill = new VacanciesSkill();
    })
  }

   // By uing this method we will Update the VacanciesSkill based on VacanciesSkill
  UpdateVacanciesSkill(): any {
    this.vacanciesskillService.UpdateVacanciesSkill(this.vacanciesskill).subscribe((res: any) => {
      this.GetVacanciesSkill();
      this.vacanciesskill = new VacanciesSkill();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the VacanciesSkill based on the Id
  DeleteVacanciesSkill(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.vacanciesskillService.DeleteVacanciesSkill(Id).subscribe((res: any) => {
        this.GetVacanciesSkill();
        this.vacanciesskill = new VacanciesSkill();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetVacanciesSkill();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetVacanciesSkill();
  }

   // By using this method we will get the Vacancies 
   GetVacancies(): any {
    this.vacanciesService.GetVacancies().subscribe((res: any) => {
      this.vacanciesData = res;

    })
  }
    // By using this method we will get the Skills 
    GetSkills(): any {
      this.skillsService.GetSkills().subscribe((res: any) => {
        this.skillsData = res;
  
      })
    }

}

