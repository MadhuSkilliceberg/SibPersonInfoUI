import { Component, OnInit } from '@angular/core';
import { FamilyContacts } from 'src/app/Models/FamilyContacts';
import { FamilyContactsService } from './../../services/familycontacts/familycontacts.service'
import { FamilyService } from 'src/app/services/family/family.service';
import { Family } from 'src/app/Models/Family';


@Component({
  selector: 'app-FamilyContacts',
  templateUrl: './FamilyContacts.component.html',
  styleUrls: ['./FamilyContacts.component.css']
})
export class FamilyContactsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  familycontacts: FamilyContacts = new FamilyContacts();
  familycontactsData: FamilyContacts[] = []
  familycontactsId: number = 0;

  familyData: Family[] = []


  constructor(
    private familycontactsService: FamilyContactsService,
    private familyService: FamilyService,


  ) { }

  ngOnInit(): any {
    this.GetFamilyContacts();
    this.GetFamily();
  }

  // By using this method we will get the FamilyContacts 
  GetFamilyContacts(): any {
    this.familycontactsService.GetFamilyContacts().subscribe((res: any) => {
      this.familycontactsData = res;

    })
  }

  // By using this method we will get the FamilyContacts based on the Id
  GetFamilyContactsById(Id: number): any {
    this.familycontactsService.GetFamilyContactsById(Id).subscribe((res: any) => {
      this.familycontacts = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the FamilyContacts based on FamilyContacts
  AddFamilyContacts(): any {
    this.familycontactsService.AddFamilyContacts(this.familycontacts).subscribe((res: any) => {
      this.GetFamilyContacts();
      this.familycontacts = new FamilyContacts();
    })
  }

   // By uing this method we will Update the FamilyContacts based on FamilyContacts
  UpdateFamilyContacts(): any {
    this.familycontactsService.UpdateFamilyContacts(this.familycontacts).subscribe((res: any) => {
      this.GetFamilyContacts();
      this.familycontacts = new FamilyContacts();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the FamilyContacts based on the Id
  DeleteFamilyContacts(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.familycontactsService.DeleteFamilyContacts(Id).subscribe((res: any) => {
        this.GetFamilyContacts();
        this.familycontacts = new FamilyContacts();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetFamilyContacts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetFamilyContacts();
  }


   // By using this method we will get the Family 
   GetFamily(): any {
    this.familyService.GetFamily().subscribe((res: any) => {
      this.familyData = res;

    })
  }
}

