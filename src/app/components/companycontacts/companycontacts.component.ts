import { Component, OnInit } from '@angular/core';
import { CompanyContacts } from 'src/app/Models/CompanyContacts';
import { CompanyContactsService } from './../../services/companycontacts/companycontacts.service'
import { CompanyAddress } from 'src/app/Models/CompanyAddress';
import { CompanyAddressService } from 'src/app/services/companyaddress/companyaddress.service';


@Component({
  selector: 'app-CompanyContacts',
  templateUrl: './CompanyContacts.component.html',
  styleUrls: ['./CompanyContacts.component.css']
})
export class CompanyContactsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  companycontacts: CompanyContacts = new CompanyContacts();
  companycontactsData: CompanyContacts[] = []
  companycontactsId: number = 0;

  companyaddressData: CompanyAddress[] = [];

  constructor(
    private companycontactsService: CompanyContactsService,
    private companyaddressService: CompanyAddressService

  ) { }

  ngOnInit(): any {
    this.GetCompanyContacts();
    this.GetCompanyAddress();
  }

  // By using this method we will get the CompanyContacts 
  GetCompanyContacts(): any {
    this.companycontactsService.GetCompanyContacts().subscribe((res: any) => {
      this.companycontactsData = res;

    })
  }

  // By using this method we will get the CompanyContacts based on the Id
  GetCompanyContactsById(Id: number): any {
    this.companycontactsService.GetCompanyContactsById(Id).subscribe((res: any) => {
      this.companycontacts = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the CompanyContacts based on CompanyContacts
  AddCompanyContacts(): any {
    this.companycontactsService.AddCompanyContacts(this.companycontacts).subscribe((res: any) => {
      this.GetCompanyContacts();
      this.companycontacts = new CompanyContacts();
    })
  }

   // By uing this method we will Update the CompanyContacts based on CompanyContacts
  UpdateCompanyContacts(): any {
    this.companycontactsService.UpdateCompanyContacts(this.companycontacts).subscribe((res: any) => {
      this.GetCompanyContacts();
      this.companycontacts = new CompanyContacts();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the CompanyContacts based on the Id
  DeleteCompanyContacts(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.companycontactsService.DeleteCompanyContacts(Id).subscribe((res: any) => {
        this.GetCompanyContacts();
        this.companycontacts = new CompanyContacts();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetCompanyContacts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetCompanyContacts();
  }

  
  // By using this method we will get the CompanyAddress 
  GetCompanyAddress(): any {
    this.companyaddressService.GetCompanyAddress().subscribe((res: any) => {
      this.companyaddressData = res;

    })
  }
}

