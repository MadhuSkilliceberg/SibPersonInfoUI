import { Component, OnInit } from '@angular/core';
import { Semesters } from 'src/app/Models/Semesters';
import { SemestersService } from './../../services/semesters/semesters.service'


@Component({
  selector: 'app-Semesters',
  templateUrl: './Semesters.component.html',
  styleUrls: ['./Semesters.component.css']
})
export class SemestersComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  semesters: Semesters = new Semesters();
  semestersData: Semesters[] = []
  semestersId: number = 0;

  constructor(
    private semestersService: SemestersService,

  ) { }

  ngOnInit(): any {
    this.GetSemesters();
  }

  // By using this method we will get the Semesters 
  GetSemesters(): any {
    this.semestersService.GetSemesters().subscribe((res: any) => {
      this.semestersData = res;

    })
  }

  // By using this method we will get the Semesters based on the Id
  GetSemestersById(Id: number): any {
    this.semestersService.GetSemestersById(Id).subscribe((res: any) => {
      this.semesters = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Semesters based on Semesters
  AddSemesters(): any {
    this.semestersService.AddSemesters(this.semesters).subscribe((res: any) => {
      this.GetSemesters();
      this.semesters = new Semesters();
    })
  }

   // By uing this method we will Update the Semesters based on Semesters
  UpdateSemesters(): any {
    this.semestersService.UpdateSemesters(this.semesters).subscribe((res: any) => {
      this.GetSemesters();
      this.semesters = new Semesters();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Semesters based on the Id
  DeleteSemesters(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.semestersService.DeleteSemesters(Id).subscribe((res: any) => {
        this.GetSemesters();
        this.semesters = new Semesters();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetSemesters();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetSemesters();
  }
}

