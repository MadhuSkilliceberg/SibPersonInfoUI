import { Component, OnInit } from '@angular/core';
import { YearSemester } from 'src/app/Models/YearSemester';
import { YearSemesterService } from './../../services/yearsemester/yearsemester.service'
import { CYearsService } from 'src/app/services/cyears/cyears.service';
import { CYears } from 'src/app/Models/CYears';
import { Semesters } from 'src/app/Models/Semesters';
import { SemestersService } from 'src/app/services/semesters/semesters.service';


@Component({
  selector: 'app-YearSemester',
  templateUrl: './YearSemester.component.html',
  styleUrls: ['./YearSemester.component.css']
})
export class YearSemesterComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  yearsemester: YearSemester = new YearSemester();
  yearsemesterData: YearSemester[] = []
  yearsemesterId: number = 0;

  cyearsData: CYears[] = []

  semestersData: Semesters[] = []



  constructor(
    private yearsemesterService: YearSemesterService,
    private cyearsService: CYearsService,
    private semestersService: SemestersService,



  ) { }

  ngOnInit(): any {
    this.GetYearSemester();
    this.GetCYears();
    this. GetSemesters();
  }

  // By using this method we will get the YearSemester 
  GetYearSemester(): any {
    this.yearsemesterService.GetYearSemester().subscribe((res: any) => {
      this.yearsemesterData = res;

    })
  }

  // By using this method we will get the YearSemester based on the Id
  GetYearSemesterById(Id: number): any {
    this.yearsemesterService.GetYearSemesterById(Id).subscribe((res: any) => {
      this.yearsemester = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the YearSemester based on YearSemester
  AddYearSemester(): any {
    this.yearsemesterService.AddYearSemester(this.yearsemester).subscribe((res: any) => {
      this.GetYearSemester();
      this.yearsemester = new YearSemester();
    })
  }

   // By uing this method we will Update the YearSemester based on YearSemester
  UpdateYearSemester(): any {
    this.yearsemesterService.UpdateYearSemester(this.yearsemester).subscribe((res: any) => {
      this.GetYearSemester();
      this.yearsemester = new YearSemester();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the YearSemester based on the Id
  DeleteYearSemester(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.yearsemesterService.DeleteYearSemester(Id).subscribe((res: any) => {
        this.GetYearSemester();
        this.yearsemester = new YearSemester();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetYearSemester();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetYearSemester();
  }

    // By using this method we will get the CYears 
    GetCYears(): any {
      this.cyearsService.GetCYears().subscribe((res: any) => {
        this.cyearsData = res;
  
      })
    }
      // By using this method we will get the Semesters 
  GetSemesters(): any {
    this.semestersService.GetSemesters().subscribe((res: any) => {
      this.semestersData = res;

    })
  }
}

