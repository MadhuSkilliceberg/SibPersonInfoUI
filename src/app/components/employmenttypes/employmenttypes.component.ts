import { Component, OnInit } from '@angular/core';
import { EmploymentTypes } from 'src/app/Models/EmploymentTypes';
import { EmploymentTypesService } from './../../services/employmenttypes/employmenttypes.service'


@Component({
  selector: 'app-EmploymentTypes',
  templateUrl: './EmploymentTypes.component.html',
  styleUrls: ['./EmploymentTypes.component.css']
})
export class EmploymentTypesComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  employmenttypes: EmploymentTypes = new EmploymentTypes();
  employmenttypesData: EmploymentTypes[] = []
  employmenttypesId: number = 0;

  constructor(
    private employmenttypesService: EmploymentTypesService,

  ) { }

  ngOnInit(): any {
    this.GetEmploymentTypes();
  }

  // By using this method we will get the EmploymentTypes 
  GetEmploymentTypes(): any {
    this.employmenttypesService.GetEmploymentTypes().subscribe((res: any) => {
      this.employmenttypesData = res;

    })
  }

  // By using this method we will get the EmploymentTypes based on the Id
  GetEmploymentTypesById(Id: number): any {
    this.employmenttypesService.GetEmploymentTypesById(Id).subscribe((res: any) => {
      this.employmenttypes = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the EmploymentTypes based on EmploymentTypes
  AddEmploymentTypes(): any {
    this.employmenttypesService.AddEmploymentTypes(this.employmenttypes).subscribe((res: any) => {
      this.GetEmploymentTypes();
      this.employmenttypes = new EmploymentTypes();
    })
  }

   // By uing this method we will Update the EmploymentTypes based on EmploymentTypes
  UpdateEmploymentTypes(): any {
    this.employmenttypesService.UpdateEmploymentTypes(this.employmenttypes).subscribe((res: any) => {
      this.GetEmploymentTypes();
      this.employmenttypes = new EmploymentTypes();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the EmploymentTypes based on the Id
  DeleteEmploymentTypes(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.employmenttypesService.DeleteEmploymentTypes(Id).subscribe((res: any) => {
        this.GetEmploymentTypes();
        this.employmenttypes = new EmploymentTypes();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetEmploymentTypes();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetEmploymentTypes();
  }
}

