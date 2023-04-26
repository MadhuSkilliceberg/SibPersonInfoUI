import { Component, OnInit } from '@angular/core';
import { FamilyEducationDetails } from 'src/app/Models/FamilyEducationDetails';
import { FamilyEducationDetailsService } from './../../services/familyeducationdetails/familyeducationdetails.service'
import { Family } from 'src/app/Models/Family';
import { FamilyService } from 'src/app/services/family/family.service';
import { QulificationType } from 'src/app/Models/QulificationType';
import { QulificationTypeService } from 'src/app/services/qulificationtype/qulificationtype.service';
import { Institutions } from 'src/app/Models/Institutions';
import { InstitutionsService } from 'src/app/services/institutions/institutions.service';


@Component({
  selector: 'app-FamilyEducationDetails',
  templateUrl: './FamilyEducationDetails.component.html',
  styleUrls: ['./FamilyEducationDetails.component.css']
})
export class FamilyEducationDetailsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  familyeducationdetails: FamilyEducationDetails = new FamilyEducationDetails();
  familyeducationdetailsData: FamilyEducationDetails[] = []
  familyeducationdetailsId: number = 0;

  familyData: Family[] = []

  qulificationtypeData: QulificationType[] = []

  institutionsData: Institutions[] = []


  

  constructor(
    private familyeducationdetailsService: FamilyEducationDetailsService,
    private familyService: FamilyService,
    private qulificationtypeService: QulificationTypeService,
    private institutionsService: InstitutionsService,


  ) { }

  ngOnInit(): any {
    this.GetFamilyEducationDetails();
    this.GetFamily();
    this.GetQulificationType();
    this.GetInstitutions()
  }

  // By using this method we will get the FamilyEducationDetails 
  GetFamilyEducationDetails(): any {
    this.familyeducationdetailsService.GetFamilyEducationDetails().subscribe((res: any) => {
      this.familyeducationdetailsData = res;

    })
  }

  // By using this method we will get the FamilyEducationDetails based on the Id
  GetFamilyEducationDetailsById(Id: number): any {
    this.familyeducationdetailsService.GetFamilyEducationDetailsById(Id).subscribe((res: any) => {
      this.familyeducationdetails = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the FamilyEducationDetails based on FamilyEducationDetails
  AddFamilyEducationDetails(): any {
    this.familyeducationdetailsService.AddFamilyEducationDetails(this.familyeducationdetails).subscribe((res: any) => {
      this.GetFamilyEducationDetails();
      this.familyeducationdetails = new FamilyEducationDetails();
    })
  }

   // By uing this method we will Update the FamilyEducationDetails based on FamilyEducationDetails
  UpdateFamilyEducationDetails(): any {
    this.familyeducationdetailsService.UpdateFamilyEducationDetails(this.familyeducationdetails).subscribe((res: any) => {
      this.GetFamilyEducationDetails();
      this.familyeducationdetails = new FamilyEducationDetails();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the FamilyEducationDetails based on the Id
  DeleteFamilyEducationDetails(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.familyeducationdetailsService.DeleteFamilyEducationDetails(Id).subscribe((res: any) => {
        this.GetFamilyEducationDetails();
        this.familyeducationdetails = new FamilyEducationDetails();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetFamilyEducationDetails();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetFamilyEducationDetails();
  }

    // By using this method we will get the Family 
    GetFamily(): any {
      this.familyService.GetFamily().subscribe((res: any) => {
        this.familyData = res;
  
      })
    }

      // By using this method we will get the QulificationType 
  GetQulificationType(): any {
    this.qulificationtypeService.GetQulificationType().subscribe((res: any) => {
      this.qulificationtypeData = res;

    })
  }

    // By using this method we will get the Institutions 
    GetInstitutions(): any {
      this.institutionsService.GetInstitutions().subscribe((res: any) => {
        this.institutionsData = res;
  
      })
    }
}

