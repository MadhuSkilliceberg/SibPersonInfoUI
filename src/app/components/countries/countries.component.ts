import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/Models/Countries';
import { CountriesService } from './../../services/countries/countries.service'


@Component({
  selector: 'app-Countries',
  templateUrl: './Countries.component.html',
  styleUrls: ['./Countries.component.css']
})
export class CountriesComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  countries: Countries = new Countries();
  countriesData: Countries[] = []
  countriesId: number = 0;

  constructor(
    private countriesService: CountriesService,

  ) { }

  ngOnInit(): any {
    this.GetCountries();
  }

  // By using this method we will get the Countries 
  GetCountries(): any {
    this.countriesService.GetCountries().subscribe((res: any) => {
      this.countriesData = res;

    })
  }

  // By using this method we will get the Countries based on the Id
  GetCountriesById(Id: number): any {
    this.countriesService.GetCountriesById(Id).subscribe((res: any) => {
      this.countries = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Countries based on Countries
  AddCountries(): any {
    this.countriesService.AddCountries(this.countries).subscribe((res: any) => {
      this.GetCountries();
      this.countries = new Countries();
    })
  }

   // By uing this method we will Update the Countries based on Countries
  UpdateCountries(): any {
    this.countriesService.UpdateCountries(this.countries).subscribe((res: any) => {
      this.GetCountries();
      this.countries = new Countries();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Countries based on the Id
  DeleteCountries(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.countriesService.DeleteCountries(Id).subscribe((res: any) => {
        this.GetCountries();
        this.countries = new Countries();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetCountries();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetCountries();
  }
}

