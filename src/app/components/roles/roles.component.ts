import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/Models/Roles';
import { RolesService } from './../../services/roles/roles.service'


@Component({
  selector: 'app-Roles',
  templateUrl: './Roles.component.html',
  styleUrls: ['./Roles.component.css']
})
export class RolesComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  roles: Roles = new Roles();
  rolesData: Roles[] = []
  rolesId: number = 0;

  constructor(
    private rolesService: RolesService,

  ) { }

  ngOnInit(): any {
    this.GetRoles();
  }

  // By using this method we will get the Roles 
  GetRoles(): any {
    this.rolesService.GetRoles().subscribe((res: any) => {
      this.rolesData = res;

    })
  }

  // By using this method we will get the Roles based on the Id
  GetRolesById(Id: number): any {
    this.rolesService.GetRolesById(Id).subscribe((res: any) => {
      this.roles = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Roles based on Roles
  AddRoles(): any {
    this.rolesService.AddRoles(this.roles).subscribe((res: any) => {
      this.GetRoles();
      this.roles = new Roles();
    })
  }

   // By uing this method we will Update the Roles based on Roles
  UpdateRoles(): any {
    this.rolesService.UpdateRoles(this.roles).subscribe((res: any) => {
      this.GetRoles();
      this.roles = new Roles();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Roles based on the Id
  DeleteRoles(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.rolesService.DeleteRoles(Id).subscribe((res: any) => {
        this.GetRoles();
        this.roles = new Roles();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetRoles();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetRoles();
  }
}

