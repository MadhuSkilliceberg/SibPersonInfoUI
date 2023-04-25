import { Component, OnInit } from '@angular/core';
import { UserContacts } from 'src/app/Models/UserContacts';
import { UserContactsService } from './../../services/usercontacts/usercontacts.service'


@Component({
  selector: 'app-UserContacts',
  templateUrl: './UserContacts.component.html',
  styleUrls: ['./UserContacts.component.css']
})
export class UserContactsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  usercontacts: UserContacts = new UserContacts();
  usercontactsData: UserContacts[] = []
  usercontactsId: number = 0;

  constructor(
    private usercontactsService: UserContactsService,

  ) { }

  ngOnInit(): any {
    this.GetUserContacts();
  }

  // By using this method we will get the UserContacts 
  GetUserContacts(): any {
    this.usercontactsService.GetUserContacts().subscribe((res: any) => {
      this.usercontactsData = res;

    })
  }

  // By using this method we will get the UserContacts based on the Id
  GetUserContactsById(Id: number): any {
    this.usercontactsService.GetUserContactsById(Id).subscribe((res: any) => {
      this.usercontacts = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserContacts based on UserContacts
  AddUserContacts(): any {
    this.usercontactsService.AddUserContacts(this.usercontacts).subscribe((res: any) => {
      this.GetUserContacts();
      this.usercontacts = new UserContacts();
    })
  }

   // By uing this method we will Update the UserContacts based on UserContacts
  UpdateUserContacts(): any {
    this.usercontactsService.UpdateUserContacts(this.usercontacts).subscribe((res: any) => {
      this.GetUserContacts();
      this.usercontacts = new UserContacts();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the UserContacts based on the Id
  DeleteUserContacts(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.usercontactsService.DeleteUserContacts(Id).subscribe((res: any) => {
        this.GetUserContacts();
        this.usercontacts = new UserContacts();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetUserContacts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetUserContacts();
  }
}

