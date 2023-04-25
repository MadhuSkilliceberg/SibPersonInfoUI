import { Component, OnInit } from '@angular/core';
import { InstitutionContacts } from 'src/app/Models/InstitutionContacts';
import { InstitutionContactsService } from './../../services/institutioncontacts/institutioncontacts.service'
import { InstitutionAddressService } from 'src/app/services/institutionaddress/institutionaddress.service';
import { InstitutionAddress } from 'src/app/Models/InstitutionAddress';


@Component({
  selector: 'app-InstitutionContacts',
  templateUrl: './InstitutionContacts.component.html',
  styleUrls: ['./InstitutionContacts.component.css']
})
export class InstitutionContactsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  institutioncontacts: InstitutionContacts = new InstitutionContacts();
  institutioncontactsData: InstitutionContacts[] = []
  institutioncontactsId: number = 0;

  institutionaddressData:InstitutionAddress[]=[];

  // institutioncontactlist:InstitutionContactList[]=[];

  constructor(
    private institutioncontactsService: InstitutionContactsService,
    private institutionAddressServices:InstitutionAddressService) { }


    ngOnInit(): void {
      this.GetInstitutionContacts();
      this.GetInstitutionAddress();
     // this.GetInstitutionContactList();
  }

  // By using this method we will get the InstitutionContacts 
  GetInstitutionContacts(): any {
    this.institutioncontactsService.GetInstitutionContacts().subscribe((res: any) => {
      this.institutioncontactsData = res;

    })
  }

  // By using this method we will get the InstitutionContacts based on the Id
  GetInstitutionContactsById(Id: number): any {
    this.institutioncontactsService.GetInstitutionContactsById(Id).subscribe((res: any) => {
      this.institutioncontacts = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the InstitutionContacts based on InstitutionContacts
  AddInstitutionContacts(): any {
    this.institutioncontactsService.AddInstitutionContacts(this.institutioncontacts).subscribe((res: any) => {
      this.GetInstitutionContacts();
      this.institutioncontacts = new InstitutionContacts();
    })
  }

   // By uing this method we will Update the InstitutionContacts based on InstitutionContacts
  UpdateInstitutionContacts(): any {
    this.institutioncontactsService.UpdateInstitutionContacts(this.institutioncontacts).subscribe((res: any) => {
      this.GetInstitutionContacts();
      this.institutioncontacts = new InstitutionContacts();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the InstitutionContacts based on the Id
  DeleteInstitutionContacts(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.institutioncontactsService.DeleteInstitutionContacts(Id).subscribe((res: any) => {
        this.GetInstitutionContacts();
        this.institutioncontacts = new InstitutionContacts();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetInstitutionContacts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetInstitutionContacts();
  }

 
// By using this method we will delete the institutionaddress 
GetInstitutionAddress():any{
  this.institutionAddressServices.GetInstitutionAddress().subscribe((res:any)=>{
   this.institutionaddressData=res;
  
  })
}

  // GetInstitutionContactList():any{
  //   this.services.GetInstitutionContactList().subscribe((resp:any)=>{
  //     this.institutioncontactlist=resp
  //   })
  // }

}

