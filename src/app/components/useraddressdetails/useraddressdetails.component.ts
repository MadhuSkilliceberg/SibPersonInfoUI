import { Component, OnInit } from '@angular/core';
import { UserAddressDetails } from 'src/app/Models/UserAddressDetails';
import { UserAddressDetailsService } from './../../services/useraddressdetails/useraddressdetails.service'
import { States } from 'src/app/Models/States';
import { StatesService } from 'src/app/services/states/states.service';
import { Countries } from 'src/app/Models/Countries';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { UsersService } from 'src/app/services/users/users.service';
import { Users } from 'src/app/Models/Users';


@Component({
  selector: 'app-UserAddressDetails',
  templateUrl: './UserAddressDetails.component.html',
  styleUrls: ['./UserAddressDetails.component.css']
})
export class UserAddressDetailsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  useraddressdetails: UserAddressDetails = new UserAddressDetails();
  useraddressdetailsData: UserAddressDetails[] = []
  useraddressdetailsId: number = 0;
  statesData: States[] = []
  countriesData: Countries[] = []
  usersData: Users[] = []

  constructor(
    private useraddressdetailsService: UserAddressDetailsService,
    private statesService: StatesService,
    private countriesService: CountriesService,
    private usersService: UsersService,

  ) { }

  ngOnInit(): any {
    this.GetUserAddressDetails();
    this.GetStates();
    this.GetCountries();
    this.GetUserAddressDetails();
    this.GetUsers();
  }

  // By using this method we will get the UserAddressDetails 
  GetUserAddressDetails(): any {
    this.useraddressdetailsService.GetUserAddressDetails().subscribe((res: any) => {
      this.useraddressdetailsData = res;

    })
  }

  // By using this method we will get the UserAddressDetails based on the Id
  GetUserAddressDetailsById(Id: number): any {
    this.useraddressdetailsService.GetUserAddressDetailsById(Id).subscribe((res: any) => {
      this.useraddressdetails = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserAddressDetails based on UserAddressDetails
  AddUserAddressDetails(): any {
    this.useraddressdetailsService.AddUserAddressDetails(this.useraddressdetails).subscribe((res: any) => {
      this.GetUserAddressDetails();
      this.useraddressdetails = new UserAddressDetails();
    })
  }

   // By uing this method we will Update the UserAddressDetails based on UserAddressDetails
  UpdateUserAddressDetails(): any {
    this.useraddressdetailsService.UpdateUserAddressDetails(this.useraddressdetails).subscribe((res: any) => {
      this.GetUserAddressDetails();
      this.useraddressdetails = new UserAddressDetails();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the UserAddressDetails based on the Id
  DeleteUserAddressDetails(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.useraddressdetailsService.DeleteUserAddressDetails(Id).subscribe((res: any) => {
        this.GetUserAddressDetails();
        this.useraddressdetails = new UserAddressDetails();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetUserAddressDetails();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetUserAddressDetails();
  }
  GetStates(): any {
    this.statesService.GetStates().subscribe((res: any) => {
      this.statesData = res;

    })
  }
  GetCountries(): any {
    this.countriesService.GetCountries().subscribe((res: any) => {
      this.countriesData = res;

    })
  }
  GetUsers(): any {
    this.usersService.GetUsers().subscribe((res: any) => {
      this.usersData = res;

    })
  }

}

