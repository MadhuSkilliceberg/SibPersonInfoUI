import { Component, OnInit } from '@angular/core';
import { UserCompany } from 'src/app/Models/UserCompany';
import { UserCompanyService } from './../../services/usercompany/usercompany.service'


@Component({
  selector: 'app-UserCompany',
  templateUrl: './UserCompany.component.html',
  styleUrls: ['./UserCompany.component.css']
})
export class UserCompanyComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  usercompany: UserCompany = new UserCompany();
  usercompanyData: UserCompany[] = []
  usercompanyId: number = 0;

  constructor(
    private usercompanyService: UserCompanyService,

  ) { }

  ngOnInit(): any {
    this.GetUserCompany();
  }

  // By using this method we will get the UserCompany 
  GetUserCompany(): any {
    this.usercompanyService.GetUserCompany().subscribe((res: any) => {
      this.usercompanyData = res;

    })
  }

  // By using this method we will get the UserCompany based on the Id
  GetUserCompanyById(Id: number): any {
    this.usercompanyService.GetUserCompanyById(Id).subscribe((res: any) => {
      this.usercompany = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserCompany based on UserCompany
  AddUserCompany(): any {
    this.usercompanyService.AddUserCompany(this.usercompany).subscribe((res: any) => {
      this.GetUserCompany();
      this.usercompany = new UserCompany();
    })
  }

   // By uing this method we will Update the UserCompany based on UserCompany
  UpdateUserCompany(): any {
    this.usercompanyService.UpdateUserCompany(this.usercompany).subscribe((res: any) => {
      this.GetUserCompany();
      this.usercompany = new UserCompany();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the UserCompany based on the Id
  DeleteUserCompany(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.usercompanyService.DeleteUserCompany(Id).subscribe((res: any) => {
        this.GetUserCompany();
        this.usercompany = new UserCompany();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetUserCompany();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetUserCompany();
  }
}

