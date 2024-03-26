import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/Models/Users';
import { UserData } from 'src/app/Models/UserData';
import { LookUp } from 'src/app/Models/LookUp';
import { LookUpService } from 'src/app/services/lookup/gender.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-affiliator-refferals',
  templateUrl: './affiliator-refferals.component.html',
  styleUrls: ['./affiliator-refferals.component.css']
})
export class AffiliatorRefferalsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  users: UserData = new UserData();
  usersData: Users[] = [];
  usersId: number = 0;
  Lookups: LookUp[] = [];
  //userData: UserData=new UserData();
  constructor(
    private usersService: UsersService,
    private lookUpService: LookUpService,
    private router: Router,

    // private jwtHelper: JwtHelperService,
  ) { }

  ngOnInit(): any {
  this.GetLookUps();
    this.GetUsers();


  }

  // By using this method we will get the Users 
  GetLookUps(): any {
    this.lookUpService.GetLookUps1().subscribe((res: any) => {
      this.Lookups = res;
      debugger

    })
  }

  // // By using this method we will get the Users 
  // GetLookUpValue(): any {
  //   this.lookUpService.GetLookUp().subscribe((res: any) => {
  //     this.usersData = res;

  //   })
  // }

  // By using this method we will get the Users 
  GetUsers(): any {
    this.usersService.GetUserData().subscribe((res: any) => {
      this.users = res;
debugger
    })
  }
}
