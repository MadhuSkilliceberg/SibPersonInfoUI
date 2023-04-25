import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/Models/Company';
import { CompanyService } from './../../services/company/company.service'


@Component({
  selector: 'app-Company',
  templateUrl: './Company.component.html',
  styleUrls: ['./Company.component.css']
})
export class CompanyComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  company: Company = new Company();
  companyData: Company[] = []
  companyId: number = 0;

  constructor(
    private companyService: CompanyService,

  ) { }

  ngOnInit(): any {
    this.GetCompany();
  }

  // By using this method we will get the Company 
  GetCompany(): any {
    this.companyService.GetCompany().subscribe((res: any) => {
      this.companyData = res;

    })
  }

  // By using this method we will get the Company based on the Id
  GetCompanyById(Id: number): any {
    this.companyService.GetCompanyById(Id).subscribe((res: any) => {
      this.company = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Company based on Company
  AddCompany(): any {
    this.companyService.AddCompany(this.company).subscribe((res: any) => {
      this.GetCompany();
      this.company = new Company();
    })
  }

   // By uing this method we will Update the Company based on Company
  UpdateCompany(): any {
    this.companyService.UpdateCompany(this.company).subscribe((res: any) => {
      this.GetCompany();
      this.company = new Company();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Company based on the Id
  DeleteCompany(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.companyService.DeleteCompany(Id).subscribe((res: any) => {
        this.GetCompany();
        this.company = new Company();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetCompany();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetCompany();
  }
}

