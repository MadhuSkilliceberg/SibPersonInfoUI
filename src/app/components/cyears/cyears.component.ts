import { Component, OnInit } from '@angular/core';
import { CYears } from 'src/app/Models/CYears';
import { CYearsService } from './../../services/cyears/cyears.service'


@Component({
  selector: 'app-CYears',
  templateUrl: './CYears.component.html',
  styleUrls: ['./CYears.component.css']
})
export class CYearsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  cyears: CYears = new CYears();
  cyearsData: CYears[] = []
  cyearsId: number = 0;

  constructor(
    private cyearsService: CYearsService,

  ) { }

  ngOnInit(): any {
    this.GetCYears();
  }

  // By using this method we will get the CYears 
  GetCYears(): any {
    this.cyearsService.GetCYears().subscribe((res: any) => {
      this.cyearsData = res;

    })
  }

  // By using this method we will get the CYears based on the Id
  GetCYearsById(Id: number): any {
    this.cyearsService.GetCYearsById(Id).subscribe((res: any) => {
      this.cyears = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the CYears based on CYears
  AddCYears(): any {
    this.cyearsService.AddCYears(this.cyears).subscribe((res: any) => {
      this.GetCYears();
      this.cyears = new CYears();
    })
  }

   // By uing this method we will Update the CYears based on CYears
  UpdateCYears(): any {
    this.cyearsService.UpdateCYears(this.cyears).subscribe((res: any) => {
      this.GetCYears();
      this.cyears = new CYears();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the CYears based on the Id
  DeleteCYears(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.cyearsService.DeleteCYears(Id).subscribe((res: any) => {
        this.GetCYears();
        this.cyears = new CYears();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetCYears();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetCYears();
  }
}

