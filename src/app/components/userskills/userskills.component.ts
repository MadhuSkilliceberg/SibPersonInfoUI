import { Component, OnInit } from '@angular/core';
import { UserSkills } from 'src/app/Models/UserSkills';
import { UserSkillsService } from './../../services/userskills/userskills.service'


@Component({
  selector: 'app-UserSkills',
  templateUrl: './UserSkills.component.html',
  styleUrls: ['./UserSkills.component.css']
})
export class UserSkillsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  userskills: UserSkills = new UserSkills();
  userskillsData: UserSkills[] = []
  userskillsId: number = 0;

  constructor(
    private userskillsService: UserSkillsService,

  ) { }

  ngOnInit(): any {
    this.GetUserSkills();
  }

  // By using this method we will get the UserSkills 
  GetUserSkills(): any {
    this.userskillsService.GetUserSkills().subscribe((res: any) => {
      this.userskillsData = res;

    })
  }

  // By using this method we will get the UserSkills based on the Id
  GetUserSkillsById(Id: number): any {
    this.userskillsService.GetUserSkillsById(Id).subscribe((res: any) => {
      this.userskills = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserSkills based on UserSkills
  AddUserSkills(): any {
    this.userskillsService.AddUserSkills(this.userskills).subscribe((res: any) => {
      this.GetUserSkills();
      this.userskills = new UserSkills();
    })
  }

   // By uing this method we will Update the UserSkills based on UserSkills
  UpdateUserSkills(): any {
    this.userskillsService.UpdateUserSkills(this.userskills).subscribe((res: any) => {
      this.GetUserSkills();
      this.userskills = new UserSkills();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the UserSkills based on the Id
  DeleteUserSkills(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.userskillsService.DeleteUserSkills(Id).subscribe((res: any) => {
        this.GetUserSkills();
        this.userskills = new UserSkills();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetUserSkills();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetUserSkills();
  }
}

