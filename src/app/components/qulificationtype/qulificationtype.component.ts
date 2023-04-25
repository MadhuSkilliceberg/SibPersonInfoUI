import { Component, OnInit } from '@angular/core';
import { QulificationType } from 'src/app/Models/QulificationType';
import { QulificationTypeService } from './../../services/qulificationtype/qulificationtype.service'


@Component({
  selector: 'app-QulificationType',
  templateUrl: './QulificationType.component.html',
  styleUrls: ['./QulificationType.component.css']
})
export class QulificationTypeComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  qulificationtype: QulificationType = new QulificationType();
  qulificationtypeData: QulificationType[] = []
  qulificationtypeId: number = 0;

  constructor(
    private qulificationtypeService: QulificationTypeService,

  ) { }

  ngOnInit(): any {
    this.GetQulificationType();
  }

  // By using this method we will get the QulificationType 
  GetQulificationType(): any {
    this.qulificationtypeService.GetQulificationType().subscribe((res: any) => {
      this.qulificationtypeData = res;

    })
  }

  // By using this method we will get the QulificationType based on the Id
  GetQulificationTypeById(Id: number): any {
    this.qulificationtypeService.GetQulificationTypeById(Id).subscribe((res: any) => {
      this.qulificationtype = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the QulificationType based on QulificationType
  AddQulificationType(): any {
    this.qulificationtypeService.AddQulificationType(this.qulificationtype).subscribe((res: any) => {
      this.GetQulificationType();
      this.qulificationtype = new QulificationType();
    })
  }

   // By uing this method we will Update the QulificationType based on QulificationType
  UpdateQulificationType(): any {
    this.qulificationtypeService.UpdateQulificationType(this.qulificationtype).subscribe((res: any) => {
      this.GetQulificationType();
      this.qulificationtype = new QulificationType();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the QulificationType based on the Id
  DeleteQulificationType(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.qulificationtypeService.DeleteQulificationType(Id).subscribe((res: any) => {
        this.GetQulificationType();
        this.qulificationtype = new QulificationType();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetQulificationType();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetQulificationType();
  }
}

