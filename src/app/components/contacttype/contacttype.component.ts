import { Component, OnInit } from '@angular/core';
import { ContactType } from 'src/app/Models/ContactType';
import { ContactTypeService } from './../../services/contacttype/contacttype.service'


@Component({
  selector: 'app-ContactType',
  templateUrl: './ContactType.component.html',
  styleUrls: ['./ContactType.component.css']
})
export class ContactTypeComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  contacttype: ContactType = new ContactType();
  contacttypeData: ContactType[] = []
  contacttypeId: number = 0;

  constructor(
    private contacttypeService: ContactTypeService,

  ) { }

  ngOnInit(): any {
    this.GetContactType();
  }

  // By using this method we will get the ContactType 
  GetContactType(): any {
    this.contacttypeService.GetContactType().subscribe((res: any) => {
      this.contacttypeData = res;

    })
  }

  // By using this method we will get the ContactType based on the Id
  GetContactTypeById(Id: number): any {
    this.contacttypeService.GetContactTypeById(Id).subscribe((res: any) => {
      this.contacttype = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the ContactType based on ContactType
  AddContactType(): any {
    this.contacttypeService.AddContactType(this.contacttype).subscribe((res: any) => {
      this.GetContactType();
      this.contacttype = new ContactType();
    })
  }

   // By uing this method we will Update the ContactType based on ContactType
  UpdateContactType(): any {
    this.contacttypeService.UpdateContactType(this.contacttype).subscribe((res: any) => {
      this.GetContactType();
      this.contacttype = new ContactType();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the ContactType based on the Id
  DeleteContactType(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.contacttypeService.DeleteContactType(Id).subscribe((res: any) => {
        this.GetContactType();
        this.contacttype = new ContactType();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetContactType();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetContactType();
  }
}

