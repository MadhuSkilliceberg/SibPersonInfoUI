import { Component, OnInit } from '@angular/core';
import { UserTypes } from 'src/app/Models/UserTypes';
import { UserTypesService } from './../../services/usertypes/usertypes.service'


@Component({
  selector: 'app-UserTypes',
  templateUrl: './UserTypes.component.html',
  styleUrls: ['./UserTypes.component.css']
})
export class UserTypesComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  usertypes: UserTypes = new UserTypes();
  usertypesData: UserTypes[] = []
  usertypesId: number = 0;

  constructor(
    private usertypesService: UserTypesService,

  ) { }

  ngOnInit(): any {
    this.GetUserTypes();
  }

  // By using this method we will get the UserTypes 
  GetUserTypes(): any {
    this.usertypesService.GetUserTypes().subscribe((res: any) => {
      this.usertypesData = res;

    })
  }

  // By using this method we will get the UserTypes based on the Id
  GetUserTypesById(Id: number): any {
    this.usertypesService.GetUserTypesById(Id).subscribe((res: any) => {
      this.usertypes = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserTypes based on UserTypes
  AddUserTypes(): any {
    this.usertypesService.AddUserTypes(this.usertypes).subscribe((res: any) => {
      this.GetUserTypes();
      this.usertypes = new UserTypes();
    })
  }

   // By uing this method we will Update the UserTypes based on UserTypes
  UpdateUserTypes(): any {
    this.usertypesService.UpdateUserTypes(this.usertypes).subscribe((res: any) => {
      this.GetUserTypes();
      this.usertypes = new UserTypes();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the UserTypes based on the Id
  DeleteUserTypes(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.usertypesService.DeleteUserTypes(Id).subscribe((res: any) => {
        this.GetUserTypes();
        this.usertypes = new UserTypes();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetUserTypes();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetUserTypes();
  }
}

