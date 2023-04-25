import { Component, OnInit } from '@angular/core';
import { FamilyEmails } from 'src/app/Models/FamilyEmails';
import { FamilyEmailsService } from './../../services/familyemails/familyemails.service'


@Component({
  selector: 'app-FamilyEmails',
  templateUrl: './FamilyEmails.component.html',
  styleUrls: ['./FamilyEmails.component.css']
})
export class FamilyEmailsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  familyemails: FamilyEmails = new FamilyEmails();
  familyemailsData: FamilyEmails[] = []
  familyemailsId: number = 0;

  constructor(
    private familyemailsService: FamilyEmailsService,

  ) { }

  ngOnInit(): any {
    this.GetFamilyEmails();
  }

  // By using this method we will get the FamilyEmails 
  GetFamilyEmails(): any {
    this.familyemailsService.GetFamilyEmails().subscribe((res: any) => {
      this.familyemailsData = res;

    })
  }

  // By using this method we will get the FamilyEmails based on the Id
  GetFamilyEmailsById(Id: number): any {
    this.familyemailsService.GetFamilyEmailsById(Id).subscribe((res: any) => {
      this.familyemails = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the FamilyEmails based on FamilyEmails
  AddFamilyEmails(): any {
    this.familyemailsService.AddFamilyEmails(this.familyemails).subscribe((res: any) => {
      this.GetFamilyEmails();
      this.familyemails = new FamilyEmails();
    })
  }

   // By uing this method we will Update the FamilyEmails based on FamilyEmails
  UpdateFamilyEmails(): any {
    this.familyemailsService.UpdateFamilyEmails(this.familyemails).subscribe((res: any) => {
      this.GetFamilyEmails();
      this.familyemails = new FamilyEmails();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the FamilyEmails based on the Id
  DeleteFamilyEmails(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.familyemailsService.DeleteFamilyEmails(Id).subscribe((res: any) => {
        this.GetFamilyEmails();
        this.familyemails = new FamilyEmails();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetFamilyEmails();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetFamilyEmails();
  }
}

