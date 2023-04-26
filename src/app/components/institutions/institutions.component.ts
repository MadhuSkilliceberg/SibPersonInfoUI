import { Component, OnInit } from '@angular/core';
import { Institutions } from 'src/app/Models/Institutions';
import { InstitutionsService } from './../../services/institutions/institutions.service'
import {QulificationType} from './../../Models/QulificationType'
import {QulificationTypeService} from './../../services/qulificationtype/qulificationtype.service'
import { Medium } from 'src/app/Models/Medium';
import { MediumService } from 'src/app/services/medium/medium.service';


@Component({
  selector: 'app-Institutions',
  templateUrl: './Institutions.component.html',
  styleUrls: ['./Institutions.component.css']
})
export class InstitutionsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  institutions: Institutions = new Institutions();
  institutionsData: Institutions[] = []
  institutionsId: number = 0;

  
  qulificationtypeData: QulificationType[] = []


  mediumData: Medium[] = []


  constructor(
    private institutionsService: InstitutionsService,
    private qualificationservices:QulificationTypeService,
    private mediumService: MediumService,


  ) { }

  ngOnInit(): any {
    this.GetInstitutions();
  }

  // By using this method we will get the Institutions 
  GetInstitutions(): any {
    this.institutionsService.GetInstitutions().subscribe((res: any) => {
      this.institutionsData = res;

    })
  }

  // By using this method we will get the Institutions based on the Id
  GetInstitutionsById(Id: number): any {
    this.institutionsService.GetInstitutionsById(Id).subscribe((res: any) => {
      this.institutions = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Institutions based on Institutions
  AddInstitutions(): any {
    this.institutionsService.AddInstitutions(this.institutions).subscribe((res: any) => {
      this.GetInstitutions();
      this.institutions = new Institutions();
    })
  }

   // By uing this method we will Update the Institutions based on Institutions
  UpdateInstitutions(): any {
    this.institutionsService.UpdateInstitutions(this.institutions).subscribe((res: any) => {
      this.GetInstitutions();
      this.institutions = new Institutions();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Institutions based on the Id
  DeleteInstitutions(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.institutionsService.DeleteInstitutions(Id).subscribe((res: any) => {
        this.GetInstitutions();
        this.institutions = new Institutions();
      })
    }
  }

//this Method is from qualificationtype component
  GetQulificationType(): any {
    this.qualificationservices.GetQulificationType().subscribe((res: any) => {
      this.qulificationtypeData = res;

    })
  }

   // By using this method we will get the Medium 
   GetMedium(): any {
    this.mediumService.GetMedium().subscribe((res: any) => {
      this.mediumData = res;

    })
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetInstitutions();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetInstitutions();
  }
}

