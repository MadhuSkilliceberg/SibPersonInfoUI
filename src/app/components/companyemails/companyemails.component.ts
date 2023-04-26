import { Component, OnInit } from '@angular/core';
import { CompanyEmails } from 'src/app/Models/CompanyEmails';
import { CompanyEmailsService } from './../../services/companyemails/companyemails.service'
import { CompanyAddress } from 'src/app/Models/CompanyAddress';
import { CompanyAddressService } from 'src/app/services/companyaddress/companyaddress.service';


@Component({
  selector: 'app-CompanyEmails',
  templateUrl: './CompanyEmails.component.html',
  styleUrls: ['./CompanyEmails.component.css']
})
export class CompanyEmailsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  companyemails: CompanyEmails = new CompanyEmails();
  companyemailsData: CompanyEmails[] = []
  companyemailsId: number = 0;

  companyaddressData: CompanyAddress[] = []
 

  constructor(
    private companyemailsService: CompanyEmailsService,
    private companyaddressService: CompanyAddressService,


  ) { }

  ngOnInit(): any {
    this.GetCompanyEmails();
  this.GetCompanyAddress();
  }

  // By using this method we will get the CompanyEmails 
  GetCompanyEmails(): any {
    this.companyemailsService.GetCompanyEmails().subscribe((res: any) => {
      this.companyemailsData = res;

    })
  }

  // By using this method we will get the CompanyEmails based on the Id
  GetCompanyEmailsById(Id: number): any {
    this.companyemailsService.GetCompanyEmailsById(Id).subscribe((res: any) => {
      this.companyemails = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the CompanyEmails based on CompanyEmails
  AddCompanyEmails(): any {
    this.companyemailsService.AddCompanyEmails(this.companyemails).subscribe((res: any) => {
      this.GetCompanyEmails();
      this.companyemails = new CompanyEmails();
    })
  }

   // By uing this method we will Update the CompanyEmails based on CompanyEmails
  UpdateCompanyEmails(): any {
    this.companyemailsService.UpdateCompanyEmails(this.companyemails).subscribe((res: any) => {
      this.GetCompanyEmails();
      this.companyemails = new CompanyEmails();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the CompanyEmails based on the Id
  DeleteCompanyEmails(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.companyemailsService.DeleteCompanyEmails(Id).subscribe((res: any) => {
        this.GetCompanyEmails();
        this.companyemails = new CompanyEmails();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetCompanyEmails();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetCompanyEmails();
  }


    // By using this method we will get the CompanyAddress 
    GetCompanyAddress(): any {
      this.companyaddressService.GetCompanyAddress().subscribe((res: any) => {
        this.companyaddressData = res;
  
      })
    }
  
}

