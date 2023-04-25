import { Component, OnInit } from '@angular/core';
import { InstitutionAddress } from 'src/app/Models/InstitutionAddress';
import { InstitutionAddressService } from './../../services/institutionaddress/institutionaddress.service'
import { InstitutionsService } from 'src/app/services/institutions/institutions.service';
import { StatesService } from 'src/app/services/states/states.service';
import { MediumService } from 'src/app/services/medium/medium.service';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { Institutions } from 'src/app/Models/Institutions';
import { States } from 'src/app/Models/States';
import { Medium } from 'src/app/Models/Medium';
import { Countries } from 'src/app/Models/Countries';


@Component({
  selector: 'app-InstitutionAddress',
  templateUrl: './InstitutionAddress.component.html',
  styleUrls: ['./InstitutionAddress.component.css']
})
export class InstitutionAddressComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  institutionaddress: InstitutionAddress = new InstitutionAddress();
  institutionaddressData: InstitutionAddress[] = []
  institutionaddressId: number = 0;

  institutionsData: Institutions[] = []
  statesData:States[]=[];
  mediumData:Medium[]=[];
  countriesData:Countries[]=[];

  constructor(
    private institutionaddressService: InstitutionAddressService,
    private institutionServices: InstitutionsService,
    private statesService:StatesService,
    private mediumservice:MediumService,
    private countriesService:CountriesService ) { }

ngOnInit(): void {
   //this.GetInstitutionAddressList()
    this.GetInstitution();
    this.GetStates();
    this.GetMedium();
    this.GetCountries();  
  }

  // By using this method we will get the InstitutionAddress 
  GetInstitutionAddress(): any {
    this.institutionaddressService.GetInstitutionAddress().subscribe((res: any) => {
      this.institutionaddressData = res;

    })
  }

  // By using this method we will get the InstitutionAddress based on the Id
  GetInstitutionAddressById(Id: number): any {
    this.institutionaddressService.GetInstitutionAddressById(Id).subscribe((res: any) => {
      this.institutionaddress = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the InstitutionAddress based on InstitutionAddress
  AddInstitutionAddress(): any {
    this.institutionaddressService.AddInstitutionAddress(this.institutionaddress).subscribe((res: any) => {
      this.GetInstitutionAddress();
      this.institutionaddress = new InstitutionAddress();
    })
  }

   // By uing this method we will Update the InstitutionAddress based on InstitutionAddress
  UpdateInstitutionAddress(): any {
    this.institutionaddressService.UpdateInstitutionAddress(this.institutionaddress).subscribe((res: any) => {
      this.GetInstitutionAddress();
      this.institutionaddress = new InstitutionAddress();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the InstitutionAddress based on the Id
  DeleteInstitutionAddress(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.institutionaddressService.DeleteInstitutionAddress(Id).subscribe((res: any) => {
        this.GetInstitutionAddress();
        this.institutionaddress = new InstitutionAddress();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetInstitutionAddress();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetInstitutionAddress();
  }



//   GetInstitutionAddressList():any{
//     this.institutionAddressservices.GetInstitutionAddressList().subscribe((resp:any)=>{
//          this.institutionaddresslist = resp;
        
//     })
// }


GetInstitution(): any {
    this.institutionServices.GetInstitutions().subscribe((res: any) => {
         this.institutionsData = res;

    })
}



GetStates():any
{
this.statesService.GetStates().subscribe(
(response:any)=>{
  this.statesData=response
  
}
)
}


GetMedium():any{
this.mediumservice.GetMedium().subscribe(
 (response:any)=>{
   this.mediumData=response;
  
 }
)
}

GetCountries():any{
this.countriesService.GetCountries().subscribe
((response:any)=>{
this.countriesData=response;

})
}

}

