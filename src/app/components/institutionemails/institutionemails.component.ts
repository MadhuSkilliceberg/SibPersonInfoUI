import { Component, OnInit } from '@angular/core';
import { InstitutionEmails } from 'src/app/Models/InstitutionEmails';
import { InstitutionEmailsService } from './../../services/institutionemails/institutionemails.service'
import { InstitutionAddressService } from 'src/app/services/institutionaddress/institutionaddress.service';
import { InstitutionAddress } from 'src/app/Models/InstitutionAddress';


@Component({
  selector: 'app-InstitutionEmails',
  templateUrl: './InstitutionEmails.component.html',
  styleUrls: ['./InstitutionEmails.component.css']
})
export class InstitutionEmailsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  institutionemails: InstitutionEmails = new InstitutionEmails();
  institutionemailsData: InstitutionEmails[] = []
  institutionemailsId: number = 0;
  institutionaddressData: InstitutionAddress[] = []

  constructor(
    private institutionemailsService: InstitutionEmailsService,
    private institutionAddressServices: InstitutionAddressService,

  ) { }

  ngOnInit(): any {
    this.GetInstitutionEmails();
    this.GetInstitutionAddress();
  }

  // By using this method we will get the InstitutionEmails 
  GetInstitutionEmails(): any {
    this.institutionemailsService.GetInstitutionEmails().subscribe((res: any) => {
      this.institutionemailsData = res;

    })
  }

  // By using this method we will get the InstitutionEmails based on the Id
  GetInstitutionEmailsById(Id: number): any {
    this.institutionemailsService.GetInstitutionEmailsById(Id).subscribe((res: any) => {
      this.institutionemails = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the InstitutionEmails based on InstitutionEmails
  AddInstitutionEmails(): any {
    this.institutionemailsService.AddInstitutionEmails(this.institutionemails).subscribe((res: any) => {
      this.GetInstitutionEmails();
      this.institutionemails = new InstitutionEmails();
    })
  }

   // By uing this method we will Update the InstitutionEmails based on InstitutionEmails
  UpdateInstitutionEmails(): any {
    this.institutionemailsService.UpdateInstitutionEmails(this.institutionemails).subscribe((res: any) => {
      this.GetInstitutionEmails();
      this.institutionemails = new InstitutionEmails();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the InstitutionEmails based on the Id
  DeleteInstitutionEmails(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.institutionemailsService.DeleteInstitutionEmails(Id).subscribe((res: any) => {
        this.GetInstitutionEmails();
        this.institutionemails = new InstitutionEmails();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetInstitutionEmails();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetInstitutionEmails();
  }

  GetInstitutionAddress():any{
  this.institutionAddressServices.GetInstitutionAddress().subscribe((res:any)=>{
   this.institutionaddressData=res;
 })
}
}

