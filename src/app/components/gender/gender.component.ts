import { Component, OnInit } from '@angular/core';
import { Gender } from 'src/app/Models/Gender';
import { GenderService } from './../../services/gender/gender.service'


@Component({
  selector: 'app-Gender',
  templateUrl: './Gender.component.html',
  styleUrls: ['./Gender.component.css']
})
export class GenderComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  gender: Gender = new Gender();
  genderData: Gender[] = []
  genderId: number = 0;

  constructor(
    private genderService: GenderService,

  ) { }

  ngOnInit(): any {
    this.GetGender();
  }

  // By using this method we will get the Gender 
  GetGender(): any {
    this.genderService.GetGender().subscribe((res: any) => {
      this.genderData = res;

    })
  }

  // By using this method we will get the Gender based on the Id
  GetGenderById(Id: number): any {
    this.genderService.GetGenderById(Id).subscribe((res: any) => {
      this.gender = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Gender based on Gender
  AddGender(): any {
    this.genderService.AddGender(this.gender).subscribe((res: any) => {
      this.GetGender();
      this.gender = new Gender();
    })
  }

   // By uing this method we will Update the Gender based on Gender
  UpdateGender(): any {
    this.genderService.UpdateGender(this.gender).subscribe((res: any) => {
      this.GetGender();
      this.gender = new Gender();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Gender based on the Id
  DeleteGender(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.genderService.DeleteGender(Id).subscribe((res: any) => {
        this.GetGender();
        this.gender = new Gender();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetGender();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetGender();
  }
}

