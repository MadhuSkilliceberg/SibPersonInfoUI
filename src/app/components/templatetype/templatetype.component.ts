import { Component, OnInit } from '@angular/core';
import { TemplateType } from 'src/app/Models/TemplateType';
import { TemplateTypeService } from './../../services/templatetype/templatetype.service'


@Component({
  selector: 'app-TemplateType',
  templateUrl: './TemplateType.component.html',
  styleUrls: ['./TemplateType.component.css']
})
export class TemplateTypeComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  templatetype: TemplateType = new TemplateType();
  templatetypeData: TemplateType[] = []
  templatetypeId: number = 0;

  constructor(
    private templatetypeService: TemplateTypeService,

  ) { }

  ngOnInit(): any {
    this.GetTemplateType();
  }

  // By using this method we will get the TemplateType 
  GetTemplateType(): any {
    this.templatetypeService.GetTemplateType().subscribe((res: any) => {
      this.templatetypeData = res;

    })
  }

  // By using this method we will get the TemplateType based on the Id
  GetTemplateTypeById(Id: number): any {
    this.templatetypeService.GetTemplateTypeById(Id).subscribe((res: any) => {
      this.templatetype = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the TemplateType based on TemplateType
  AddTemplateType(): any {
    this.templatetypeService.AddTemplateType(this.templatetype).subscribe((res: any) => {
      this.GetTemplateType();
      this.templatetype = new TemplateType();
    })
  }

   // By uing this method we will Update the TemplateType based on TemplateType
  UpdateTemplateType(): any {
    this.templatetypeService.UpdateTemplateType(this.templatetype).subscribe((res: any) => {
      this.GetTemplateType();
      this.templatetype = new TemplateType();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the TemplateType based on the Id
  DeleteTemplateType(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.templatetypeService.DeleteTemplateType(Id).subscribe((res: any) => {
        this.GetTemplateType();
        this.templatetype = new TemplateType();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetTemplateType();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetTemplateType();
  }
}

