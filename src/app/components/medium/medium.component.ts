import { Component, OnInit } from '@angular/core';
import { Medium } from 'src/app/Models/Medium';
import { MediumService } from './../../services/medium/medium.service'


@Component({
  selector: 'app-Medium',
  templateUrl: './Medium.component.html',
  styleUrls: ['./Medium.component.css']
})
export class MediumComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  medium: Medium = new Medium();
  mediumData: Medium[] = []
  mediumId: number = 0;

  constructor(
    private mediumService: MediumService,

  ) { }

  ngOnInit(): any {
    this.GetMedium();
  }

  // By using this method we will get the Medium 
  GetMedium(): any {
    this.mediumService.GetMedium().subscribe((res: any) => {
      this.mediumData = res;

    })
  }

  // By using this method we will get the Medium based on the Id
  GetMediumById(Id: number): any {
    this.mediumService.GetMediumById(Id).subscribe((res: any) => {
      this.medium = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Medium based on Medium
  AddMedium(): any {
    this.mediumService.AddMedium(this.medium).subscribe((res: any) => {
      this.GetMedium();
      this.medium = new Medium();
    })
  }

   // By uing this method we will Update the Medium based on Medium
  UpdateMedium(): any {
    this.mediumService.UpdateMedium(this.medium).subscribe((res: any) => {
      this.GetMedium();
      this.medium = new Medium();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Medium based on the Id
  DeleteMedium(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.mediumService.DeleteMedium(Id).subscribe((res: any) => {
        this.GetMedium();
        this.medium = new Medium();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetMedium();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetMedium();
  }
}

