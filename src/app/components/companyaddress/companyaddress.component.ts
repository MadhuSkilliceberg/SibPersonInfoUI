import { Component, OnInit } from '@angular/core';
import { CompanyAddress } from 'src/app/Models/CompanyAddress';
import { CompanyAddressService } from './../../services/companyaddress/companyaddress.service'
import { Company } from 'src/app/Models/Company';
import { Countries } from 'src/app/Models/Countries';
import { States } from 'src/app/Models/States';
import { CompanyService } from 'src/app/services/company/company.service';
import { StatesService } from 'src/app/services/states/states.service';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { tick } from '@angular/core/testing';


@Component({
  selector: 'app-CompanyAddress',
  templateUrl: './CompanyAddress.component.html',
  styleUrls: ['./CompanyAddress.component.css']
})
export class CompanyAddressComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  companyaddress: CompanyAddress = new CompanyAddress();
  companyaddressData: CompanyAddress[] = []
  companyaddressId: number = 0;

  companyData: Company[] = [];
  
  statesData: States[] = [];

  countriesData: Countries[] = [];

  constructor(
    private companyaddressService: CompanyAddressService,
    private companyService: CompanyService, 
    private statesService: StatesService,
    private countriesService: CountriesService

  ) { }

  ngOnInit(): any {
    this.GetCompanyAddress();
    this.GetCompany();
    this. GetStates();
    this. GetCountries();

  }

  // By using this method we will get the CompanyAddress 
  GetCompanyAddress(): any {
    this.companyaddressService.GetCompanyAddress().subscribe((res: any) => {
      this.companyaddressData = res;

    })
  }

  // By using this method we will get the CompanyAddress based on the Id
  GetCompanyAddressById(Id: number): any {
    this.companyaddressService.GetCompanyAddressById(Id).subscribe((res: any) => {
      this.companyaddress = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the CompanyAddress based on CompanyAddress
  AddCompanyAddress(): any {
    this.companyaddressService.AddCompanyAddress(this.companyaddress).subscribe((res: any) => {
      this.GetCompanyAddress();
      this.companyaddress = new CompanyAddress();
    })
  }

   // By uing this method we will Update the CompanyAddress based on CompanyAddress
  UpdateCompanyAddress(): any {
    this.companyaddressService.UpdateCompanyAddress(this.companyaddress).subscribe((res: any) => {
      this.GetCompanyAddress();
      this.companyaddress = new CompanyAddress();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the CompanyAddress based on the Id
  DeleteCompanyAddress(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.companyaddressService.DeleteCompanyAddress(Id).subscribe((res: any) => {
        this.GetCompanyAddress();
        this.companyaddress = new CompanyAddress();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetCompanyAddress();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetCompanyAddress();
  }



  
   // By using this method we will get the Company 
   GetCompany(): any {
    this.companyService.GetCompany().subscribe((res: any) => {
      this.companyData = res;

    })
  }

    // By using this method we will get the States 
    GetStates(): any {
      this.statesService.GetStates().subscribe((res: any) => {
        this.statesData = res;
  
      })
    }


      // By using this method we will get the Countries 
  GetCountries(): any {
    this.countriesService.GetCountries().subscribe((res: any) => {
      this.countriesData = res;

    })
  }
}

