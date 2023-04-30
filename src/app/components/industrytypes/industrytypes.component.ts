import { Component, OnInit } from '@angular/core';
import { IndustryTypes } from 'src/app/Models/IndustryTypes';
import { IndustryTypesService } from './../../services/industrytypes/industrytypes.service'


@Component({
  selector: 'app-IndustryTypes',
  templateUrl: './IndustryTypes.component.html',
  styleUrls: ['./IndustryTypes.component.css']
})
export class IndustryTypesComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  industrytypes: IndustryTypes = new IndustryTypes();
  industrytypesData: IndustryTypes[] = []
  industrytypesId: number = 0;

  constructor(
    private industrytypesService: IndustryTypesService,

  ) { }

  ngOnInit(): any {
    this.GetIndustryTypes();
  }

  // By using this method we will get the IndustryTypes 
  GetIndustryTypes(): any {
    this.industrytypesService.GetIndustryTypes().subscribe((res: any) => {
      this.industrytypesData = res;

    })
  }

  // By using this method we will get the IndustryTypes based on the Id
  GetIndustryTypesById(Id: number): any {
    this.industrytypesService.GetIndustryTypesById(Id).subscribe((res: any) => {
      this.industrytypes = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the IndustryTypes based on IndustryTypes
  AddIndustryTypes(): any {
    
    this.industrytypesService.AddIndustryTypes(this.industrytypes).subscribe((res: any) => {
      this.GetIndustryTypes();
      this.industrytypes = new IndustryTypes();
    })
  }

   // By uing this method we will Update the IndustryTypes based on IndustryTypes
  UpdateIndustryTypes(): any {
    this.industrytypesService.UpdateIndustryTypes(this.industrytypes).subscribe((res: any) => {
      this.GetIndustryTypes();
      this.industrytypes = new IndustryTypes();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the IndustryTypes based on the Id
  DeleteIndustryTypes(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.industrytypesService.DeleteIndustryTypes(Id).subscribe((res: any) => {
        this.GetIndustryTypes();
        this.industrytypes = new IndustryTypes();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetIndustryTypes();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetIndustryTypes();
  }
}

