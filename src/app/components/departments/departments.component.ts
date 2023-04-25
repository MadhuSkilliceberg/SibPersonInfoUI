import { Component, OnInit } from '@angular/core';
import { Departments } from 'src/app/Models/Departments';
import { DepartmentsService } from './../../services/departments/departments.service'


@Component({
  selector: 'app-Departments',
  templateUrl: './Departments.component.html',
  styleUrls: ['./Departments.component.css']
})
export class DepartmentsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  departments: Departments = new Departments();
  departmentsData: Departments[] = []
  departmentsId: number = 0;

  constructor(
    private departmentsService: DepartmentsService,

  ) { }

  ngOnInit(): any {
    this.GetDepartments();
  }

  // By using this method we will get the Departments 
  GetDepartments(): any {
    this.departmentsService.GetDepartments().subscribe((res: any) => {
      this.departmentsData = res;

    })
  }

  // By using this method we will get the Departments based on the Id
  GetDepartmentsById(Id: number): any {
    this.departmentsService.GetDepartmentsById(Id).subscribe((res: any) => {
      this.departments = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Departments based on Departments
  AddDepartments(): any {
    this.departmentsService.AddDepartments(this.departments).subscribe((res: any) => {
      this.GetDepartments();
      this.departments = new Departments();
    })
  }

   // By uing this method we will Update the Departments based on Departments
  UpdateDepartments(): any {
    this.departmentsService.UpdateDepartments(this.departments).subscribe((res: any) => {
      this.GetDepartments();
      this.departments = new Departments();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Departments based on the Id
  DeleteDepartments(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.departmentsService.DeleteDepartments(Id).subscribe((res: any) => {
        this.GetDepartments();
        this.departments = new Departments();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetDepartments();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetDepartments();
  }
}

