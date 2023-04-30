import { Component, OnInit } from '@angular/core';
import { Template } from 'src/app/Models/Template';
import { TemplateService } from './../../services/template/template.service'
import { TemplateType } from 'src/app/Models/TemplateType';
import { TemplateTypeService } from 'src/app/services/templatetype/templatetype.service';


@Component({
  selector: 'app-Template',
  templateUrl: './Template.component.html',
  styleUrls: ['./Template.component.css']
})
export class TemplateComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  template: Template = new Template();
  templateData: Template[] = []
  templateId: number = 0;
  templatetypeData: TemplateType[] = []

  constructor(
    private templateService: TemplateService,
    private templatetypeService: TemplateTypeService,

  ) { }

  ngOnInit(): any {
    this.GetTemplate();
    this.GetTemplateType();
  }

  // By using this method we will get the Template 
  GetTemplate(): any {
    this.templateService.GetTemplate().subscribe((res: any) => {
      this.templateData = res;

    })
  }

  // By using this method we will get the Template based on the Id
  GetTemplateById(Id: number): any {
    this.templateService.GetTemplateById(Id).subscribe((res: any) => {
      this.template = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Template based on Template
  AddTemplate(): any {
    this.templateService.AddTemplate(this.template).subscribe((res: any) => {
      this.GetTemplate();
      this.template = new Template();
    })
  }

   // By uing this method we will Update the Template based on Template
  UpdateTemplate(): any {
    this.templateService.UpdateTemplate(this.template).subscribe((res: any) => {
      this.GetTemplate();
      this.template = new Template();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Template based on the Id
  DeleteTemplate(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.templateService.DeleteTemplate(Id).subscribe((res: any) => {
        this.GetTemplate();
        this.template = new Template();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetTemplate();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetTemplate();
  }
  GetTemplateType(): any {
    this.templatetypeService.GetTemplateType().subscribe((res: any) => {
      this.templatetypeData = res;

    })
  }

}

