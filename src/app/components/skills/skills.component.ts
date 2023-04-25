import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/Models/Skills';
import { SkillsService } from './../../services/skills/skills.service'


@Component({
  selector: 'app-Skills',
  templateUrl: './Skills.component.html',
  styleUrls: ['./Skills.component.css']
})
export class SkillsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  skills: Skills = new Skills();
  skillsData: Skills[] = []
  skillsId: number = 0;

  constructor(
    private skillsService: SkillsService,

  ) { }

  ngOnInit(): any {
    this.GetSkills();
  }

  // By using this method we will get the Skills 
  GetSkills(): any {
    this.skillsService.GetSkills().subscribe((res: any) => {
      this.skillsData = res;

    })
  }

  // By using this method we will get the Skills based on the Id
  GetSkillsById(Id: number): any {
    this.skillsService.GetSkillsById(Id).subscribe((res: any) => {
      this.skills = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Skills based on Skills
  AddSkills(): any {
    this.skillsService.AddSkills(this.skills).subscribe((res: any) => {
      this.GetSkills();
      this.skills = new Skills();
    })
  }

   // By uing this method we will Update the Skills based on Skills
  UpdateSkills(): any {
    this.skillsService.UpdateSkills(this.skills).subscribe((res: any) => {
      this.GetSkills();
      this.skills = new Skills();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Skills based on the Id
  DeleteSkills(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.skillsService.DeleteSkills(Id).subscribe((res: any) => {
        this.GetSkills();
        this.skills = new Skills();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetSkills();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetSkills();
  }
}

