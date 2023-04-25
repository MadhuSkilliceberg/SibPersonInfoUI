import { Component, OnInit } from '@angular/core';
import { Vacancies } from 'src/app/Models/Vacancies';
import { VacanciesService } from './../../services/vacancies/vacancies.service'


@Component({
  selector: 'app-Vacancies',
  templateUrl: './Vacancies.component.html',
  styleUrls: ['./Vacancies.component.css']
})
export class VacanciesComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  vacancies: Vacancies = new Vacancies();
  vacanciesData: Vacancies[] = []
  vacanciesId: number = 0;

  constructor(
    private vacanciesService: VacanciesService,

  ) { }

  ngOnInit(): any {
    this.GetVacancies();
  }

  // By using this method we will get the Vacancies 
  GetVacancies(): any {
    this.vacanciesService.GetVacancies().subscribe((res: any) => {
      this.vacanciesData = res;

    })
  }

  // By using this method we will get the Vacancies based on the Id
  GetVacanciesById(Id: number): any {
    this.vacanciesService.GetVacanciesById(Id).subscribe((res: any) => {
      this.vacancies = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Vacancies based on Vacancies
  AddVacancies(): any {
    this.vacanciesService.AddVacancies(this.vacancies).subscribe((res: any) => {
      this.GetVacancies();
      this.vacancies = new Vacancies();
    })
  }

   // By uing this method we will Update the Vacancies based on Vacancies
  UpdateVacancies(): any {
    this.vacanciesService.UpdateVacancies(this.vacancies).subscribe((res: any) => {
      this.GetVacancies();
      this.vacancies = new Vacancies();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Vacancies based on the Id
  DeleteVacancies(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.vacanciesService.DeleteVacancies(Id).subscribe((res: any) => {
        this.GetVacancies();
        this.vacancies = new Vacancies();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetVacancies();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetVacancies();
  }
}

