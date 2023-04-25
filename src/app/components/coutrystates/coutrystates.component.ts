import { Component, OnInit } from '@angular/core';
import { CoutryStates } from 'src/app/Models/CoutryStates';
import { CoutryStatesService } from './../../services/coutrystates/coutrystates.service'


@Component({
  selector: 'app-CoutryStates',
  templateUrl: './CoutryStates.component.html',
  styleUrls: ['./CoutryStates.component.css']
})
export class CoutryStatesComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  coutrystates: CoutryStates = new CoutryStates();
  coutrystatesData: CoutryStates[] = []
  coutrystatesId: number = 0;

  constructor(
    private coutrystatesService: CoutryStatesService,

  ) { }

  ngOnInit(): any {
    this.GetCoutryStates();
  }

  // By using this method we will get the CoutryStates 
  GetCoutryStates(): any {
    this.coutrystatesService.GetCoutryStates().subscribe((res: any) => {
      this.coutrystatesData = res;

    })
  }

  // By using this method we will get the CoutryStates based on the Id
  GetCoutryStatesById(Id: number): any {
    this.coutrystatesService.GetCoutryStatesById(Id).subscribe((res: any) => {
      this.coutrystates = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the CoutryStates based on CoutryStates
  AddCoutryStates(): any {
    this.coutrystatesService.AddCoutryStates(this.coutrystates).subscribe((res: any) => {
      this.GetCoutryStates();
      this.coutrystates = new CoutryStates();
    })
  }

   // By uing this method we will Update the CoutryStates based on CoutryStates
  UpdateCoutryStates(): any {
    this.coutrystatesService.UpdateCoutryStates(this.coutrystates).subscribe((res: any) => {
      this.GetCoutryStates();
      this.coutrystates = new CoutryStates();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the CoutryStates based on the Id
  DeleteCoutryStates(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.coutrystatesService.DeleteCoutryStates(Id).subscribe((res: any) => {
        this.GetCoutryStates();
        this.coutrystates = new CoutryStates();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetCoutryStates();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetCoutryStates();
  }
}

