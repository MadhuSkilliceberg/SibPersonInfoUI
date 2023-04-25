import { Component, OnInit } from '@angular/core';
import { RoleCategory } from 'src/app/Models/RoleCategory';
import { RoleCategoryService } from './../../services/rolecategory/rolecategory.service'


@Component({
  selector: 'app-RoleCategory',
  templateUrl: './RoleCategory.component.html',
  styleUrls: ['./RoleCategory.component.css']
})
export class RoleCategoryComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  rolecategory: RoleCategory = new RoleCategory();
  rolecategoryData: RoleCategory[] = []
  rolecategoryId: number = 0;

  constructor(
    private rolecategoryService: RoleCategoryService,

  ) { }

  ngOnInit(): any {
    this.GetRoleCategory();
  }

  // By using this method we will get the RoleCategory 
  GetRoleCategory(): any {
    this.rolecategoryService.GetRoleCategory().subscribe((res: any) => {
      this.rolecategoryData = res;

    })
  }

  // By using this method we will get the RoleCategory based on the Id
  GetRoleCategoryById(Id: number): any {
    this.rolecategoryService.GetRoleCategoryById(Id).subscribe((res: any) => {
      this.rolecategory = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the RoleCategory based on RoleCategory
  AddRoleCategory(): any {
    this.rolecategoryService.AddRoleCategory(this.rolecategory).subscribe((res: any) => {
      this.GetRoleCategory();
      this.rolecategory = new RoleCategory();
    })
  }

   // By uing this method we will Update the RoleCategory based on RoleCategory
  UpdateRoleCategory(): any {
    this.rolecategoryService.UpdateRoleCategory(this.rolecategory).subscribe((res: any) => {
      this.GetRoleCategory();
      this.rolecategory = new RoleCategory();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the RoleCategory based on the Id
  DeleteRoleCategory(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.rolecategoryService.DeleteRoleCategory(Id).subscribe((res: any) => {
        this.GetRoleCategory();
        this.rolecategory = new RoleCategory();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetRoleCategory();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetRoleCategory();
  }
}

