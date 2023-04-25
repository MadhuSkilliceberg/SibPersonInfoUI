import { Component, OnInit } from '@angular/core';
import { MarritalStatus } from 'src/app/Models/MarritalStatus';
import { MarritalStatusService } from './../../services/marritalstatus/marritalstatus.service'


@Component({
  selector: 'app-MarritalStatus',
  templateUrl: './MarritalStatus.component.html',
  styleUrls: ['./MarritalStatus.component.css']
})
export class MarritalStatusComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  marritalstatus: MarritalStatus = new MarritalStatus();
  marritalstatusData: MarritalStatus[] = []
  marritalstatusId: number = 0;

  constructor(
    private marritalstatusService: MarritalStatusService,

  ) { }

  ngOnInit(): any {
    this.GetMarritalStatus();
  }

  // By using this method we will get the MarritalStatus 
  GetMarritalStatus(): any {
    this.marritalstatusService.GetMarritalStatus().subscribe((res: any) => {
      this.marritalstatusData = res;

    })
  }

  // By using this method we will get the MarritalStatus based on the Id
  GetMarritalStatusById(Id: number): any {
    this.marritalstatusService.GetMarritalStatusById(Id).subscribe((res: any) => {
      this.marritalstatus = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the MarritalStatus based on MarritalStatus
  AddMarritalStatus(): any {
    this.marritalstatusService.AddMarritalStatus(this.marritalstatus).subscribe((res: any) => {
      this.GetMarritalStatus();
      this.marritalstatus = new MarritalStatus();
    })
  }

   // By uing this method we will Update the MarritalStatus based on MarritalStatus
  UpdateMarritalStatus(): any {
    this.marritalstatusService.UpdateMarritalStatus(this.marritalstatus).subscribe((res: any) => {
      this.GetMarritalStatus();
      this.marritalstatus = new MarritalStatus();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the MarritalStatus based on the Id
  DeleteMarritalStatus(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.marritalstatusService.DeleteMarritalStatus(Id).subscribe((res: any) => {
        this.GetMarritalStatus();
        this.marritalstatus = new MarritalStatus();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetMarritalStatus();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetMarritalStatus();
  }
}

