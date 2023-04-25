import { Component, OnInit } from '@angular/core';
import { Designation } from 'src/app/Models/Designation';
import { DesignationService } from './../../services/designation/designation.service'


@Component({
  selector: 'app-Designation',
  templateUrl: './Designation.component.html',
  styleUrls: ['./Designation.component.css']
})
export class DesignationComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  designation: Designation = new Designation();
  designationData: Designation[] = []
  designationId: number = 0;

  constructor(
    private designationService: DesignationService,

  ) { }

  ngOnInit(): any {
    this.GetDesignation();
  }

  // By using this method we will get the Designation 
  GetDesignation(): any {
    this.designationService.GetDesignation().subscribe((res: any) => {
      this.designationData = res;

    })
  }

  // By using this method we will get the Designation based on the Id
  GetDesignationById(Id: number): any {
    this.designationService.GetDesignationById(Id).subscribe((res: any) => {
      this.designation = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Designation based on Designation
  AddDesignation(): any {
    this.designationService.AddDesignation(this.designation).subscribe((res: any) => {
      this.GetDesignation();
      this.designation = new Designation();
    })
  }

   // By uing this method we will Update the Designation based on Designation
  UpdateDesignation(): any {
    this.designationService.UpdateDesignation(this.designation).subscribe((res: any) => {
      this.GetDesignation();
      this.designation = new Designation();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Designation based on the Id
  DeleteDesignation(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.designationService.DeleteDesignation(Id).subscribe((res: any) => {
        this.GetDesignation();
        this.designation = new Designation();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetDesignation();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetDesignation();
  }
}

