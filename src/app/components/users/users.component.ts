import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Models/Users';
import { UsersService } from './../../services/users/users.service'
import { Gender } from 'src/app/Models/Gender';
import { GenderService } from 'src/app/services/gender/gender.service';
import { MarritalStatusService } from 'src/app/services/marritalstatus/marritalstatus.service';
import { MarritalStatus } from 'src/app/Models/MarritalStatus';
import { UserTypes } from 'src/app/Models/UserTypes';
import { UserTypesService } from 'src/app/services/usertypes/usertypes.service';


@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.css']
})
export class UsersComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  users: Users = new Users();
  usersData: Users[] = [];
  usersId: number = 0;

  genderData: Gender[] = [];
  marritalstatusData: MarritalStatus[] = [];
  usertypesData: UserTypes[] = []


  constructor(
    private usersService: UsersService,
    private genderService: GenderService,
    private marritalstatusService: MarritalStatusService,
    private usertypesService: UserTypesService,

  ) { }

  ngOnInit(): any {
    this.GetUsers();
    this. GetGender();
    this. GetMarritalStatus();
    this. GetUserTypes();

  }

  // By using this method we will get the Users 
  GetUsers(): any {
    this.usersService.GetUsers().subscribe((res: any) => {
      this.usersData = res;

    })
  }

  // By using this method we will get the Users based on the Id
  GetUsersById(Id: number): any {
    this.usersService.GetUsersById(Id).subscribe((res: any) => {
      this.users = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Users based on Users
  AddUsers(): any {
    this.usersService.AddUsers(this.users).subscribe((res: any) => {
      this.GetUsers();
      this.users = new Users();
    })
  }

   // By uing this method we will Update the Users based on Users
  UpdateUsers(): any {
    this.usersService.UpdateUsers(this.users).subscribe((res: any) => {
      this.GetUsers();
      this.users = new Users();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Users based on the Id
  DeleteUsers(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.usersService.DeleteUsers(Id).subscribe((res: any) => {
        this.GetUsers();
        this.users = new Users();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetUsers();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetUsers();
  }

   // By using this method we will get the Gender 
   GetGender(): any {
    this.genderService.GetGender().subscribe((res: any) => {
      this.genderData = res;

    })
  }

    // By using this method we will get the MarritalStatus 
    GetMarritalStatus(): any {
      this.marritalstatusService.GetMarritalStatus().subscribe((res: any) => {
        this.marritalstatusData = res;
  
      })
    }

      // By using this method we will get the UserTypes 
  GetUserTypes(): any {
    this.usertypesService.GetUserTypes().subscribe((res: any) => {
      this.usertypesData = res;

    })
  }


}

