import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/Models/Status';
import { StatusService } from './../../services/status/status.service'


@Component({
  selector: 'app-Status',
  templateUrl: './Status.component.html',
  styleUrls: ['./Status.component.css']
})
export class StatusComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  status: Status = new Status();
  statusData: Status[] = []
  statusId: number = 0;

  constructor(
    private statusService: StatusService,

  ) { }

  ngOnInit(): any {
    this.GetStatus();
  }

  // By using this method we will get the Status 
  GetStatus(): any {
    this.statusService.GetStatus().subscribe((res: any) => {
      this.statusData = res;

    })
  }

  // By using this method we will get the Status based on the Id
  GetStatusById(Id: number): any {
    this.statusService.GetStatusById(Id).subscribe((res: any) => {
      this.status = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Status based on Status
  AddStatus(): any {
    this.statusService.AddStatus(this.status).subscribe((res: any) => {
      this.GetStatus();
      this.status = new Status();
    })
  }

   // By uing this method we will Update the Status based on Status
  UpdateStatus(): any {
    this.statusService.UpdateStatus(this.status).subscribe((res: any) => {
      this.GetStatus();
      this.status = new Status();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Status based on the Id
  DeleteStatus(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.statusService.DeleteStatus(Id).subscribe((res: any) => {
        this.GetStatus();
        this.status = new Status();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetStatus();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetStatus();
  }
}

