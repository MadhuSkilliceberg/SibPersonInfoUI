import { Component, OnInit } from '@angular/core';
import { UserEducationDetails } from 'src/app/Models/UserEducationDetails';
import { UserEducationDetailsService } from './../../services/usereducationdetails/usereducationdetails.service'


@Component({
  selector: 'app-UserEducationDetails',
  templateUrl: './UserEducationDetails.component.html',
  styleUrls: ['./UserEducationDetails.component.css']
})
export class UserEducationDetailsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  usereducationdetails: UserEducationDetails = new UserEducationDetails();
  usereducationdetailsData: UserEducationDetails[] = []
  usereducationdetailsId: number = 0;

  constructor(
    private usereducationdetailsService: UserEducationDetailsService,

  ) { }

  ngOnInit(): any {
    this.GetUserEducationDetails();
  }

  // By using this method we will get the UserEducationDetails 
  GetUserEducationDetails(): any {
    this.usereducationdetailsService.GetUserEducationDetails().subscribe((res: any) => {
      this.usereducationdetailsData = res;

    })
  }

  // By using this method we will get the UserEducationDetails based on the Id
  GetUserEducationDetailsById(Id: number): any {
    this.usereducationdetailsService.GetUserEducationDetailsById(Id).subscribe((res: any) => {
      this.usereducationdetails = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserEducationDetails based on UserEducationDetails
  AddUserEducationDetails(): any {
    this.usereducationdetailsService.AddUserEducationDetails(this.usereducationdetails).subscribe((res: any) => {
      this.GetUserEducationDetails();
      this.usereducationdetails = new UserEducationDetails();
    })
  }

   // By uing this method we will Update the UserEducationDetails based on UserEducationDetails
  UpdateUserEducationDetails(): any {
    this.usereducationdetailsService.UpdateUserEducationDetails(this.usereducationdetails).subscribe((res: any) => {
      this.GetUserEducationDetails();
      this.usereducationdetails = new UserEducationDetails();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the UserEducationDetails based on the Id
  DeleteUserEducationDetails(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.usereducationdetailsService.DeleteUserEducationDetails(Id).subscribe((res: any) => {
        this.GetUserEducationDetails();
        this.usereducationdetails = new UserEducationDetails();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetUserEducationDetails();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetUserEducationDetails();
  }
}

