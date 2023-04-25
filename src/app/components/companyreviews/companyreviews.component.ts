import { Component, OnInit } from '@angular/core';
import { CompanyReviews } from 'src/app/Models/CompanyReviews';
import { CompanyReviewsService } from './../../services/companyreviews/companyreviews.service'


@Component({
  selector: 'app-CompanyReviews',
  templateUrl: './CompanyReviews.component.html',
  styleUrls: ['./CompanyReviews.component.css']
})
export class CompanyReviewsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  companyreviews: CompanyReviews = new CompanyReviews();
  companyreviewsData: CompanyReviews[] = []
  companyreviewsId: number = 0;

  constructor(
    private companyreviewsService: CompanyReviewsService,

  ) { }

  ngOnInit(): any {
    this.GetCompanyReviews();
  }

  // By using this method we will get the CompanyReviews 
  GetCompanyReviews(): any {
    this.companyreviewsService.GetCompanyReviews().subscribe((res: any) => {
      this.companyreviewsData = res;

    })
  }

  // By using this method we will get the CompanyReviews based on the Id
  GetCompanyReviewsById(Id: number): any {
    this.companyreviewsService.GetCompanyReviewsById(Id).subscribe((res: any) => {
      this.companyreviews = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the CompanyReviews based on CompanyReviews
  AddCompanyReviews(): any {
    this.companyreviewsService.AddCompanyReviews(this.companyreviews).subscribe((res: any) => {
      this.GetCompanyReviews();
      this.companyreviews = new CompanyReviews();
    })
  }

   // By uing this method we will Update the CompanyReviews based on CompanyReviews
  UpdateCompanyReviews(): any {
    this.companyreviewsService.UpdateCompanyReviews(this.companyreviews).subscribe((res: any) => {
      this.GetCompanyReviews();
      this.companyreviews = new CompanyReviews();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the CompanyReviews based on the Id
  DeleteCompanyReviews(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.companyreviewsService.DeleteCompanyReviews(Id).subscribe((res: any) => {
        this.GetCompanyReviews();
        this.companyreviews = new CompanyReviews();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetCompanyReviews();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetCompanyReviews();
  }
}

