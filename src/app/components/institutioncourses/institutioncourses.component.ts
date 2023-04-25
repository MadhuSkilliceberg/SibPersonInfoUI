import { Component, OnInit } from '@angular/core';
import { InstitutionCourses } from 'src/app/Models/InstitutionCourses';
import { InstitutionCoursesService } from './../../services/institutioncourses/institutioncourses.service'


@Component({
  selector: 'app-InstitutionCourses',
  templateUrl: './InstitutionCourses.component.html',
  styleUrls: ['./InstitutionCourses.component.css']
})
export class InstitutionCoursesComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  institutioncourses: InstitutionCourses = new InstitutionCourses();
  institutioncoursesData: InstitutionCourses[] = []
  institutioncoursesId: number = 0;

  constructor(
    private institutioncoursesService: InstitutionCoursesService,

  ) { }

  ngOnInit(): any {
    this.GetInstitutionCourses();
  }

  // By using this method we will get the InstitutionCourses 
  GetInstitutionCourses(): any {
    this.institutioncoursesService.GetInstitutionCourses().subscribe((res: any) => {
      this.institutioncoursesData = res;

    })
  }

  // By using this method we will get the InstitutionCourses based on the Id
  GetInstitutionCoursesById(Id: number): any {
    this.institutioncoursesService.GetInstitutionCoursesById(Id).subscribe((res: any) => {
      this.institutioncourses = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the InstitutionCourses based on InstitutionCourses
  AddInstitutionCourses(): any {
    this.institutioncoursesService.AddInstitutionCourses(this.institutioncourses).subscribe((res: any) => {
      this.GetInstitutionCourses();
      this.institutioncourses = new InstitutionCourses();
    })
  }

   // By uing this method we will Update the InstitutionCourses based on InstitutionCourses
  UpdateInstitutionCourses(): any {
    this.institutioncoursesService.UpdateInstitutionCourses(this.institutioncourses).subscribe((res: any) => {
      this.GetInstitutionCourses();
      this.institutioncourses = new InstitutionCourses();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the InstitutionCourses based on the Id
  DeleteInstitutionCourses(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.institutioncoursesService.DeleteInstitutionCourses(Id).subscribe((res: any) => {
        this.GetInstitutionCourses();
        this.institutioncourses = new InstitutionCourses();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetInstitutionCourses();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetInstitutionCourses();
  }
}

