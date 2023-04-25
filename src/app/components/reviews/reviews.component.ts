import { Component, OnInit } from '@angular/core';
import { Reviews } from 'src/app/Models/Reviews';
import { ReviewsService } from './../../services/reviews/reviews.service'


@Component({
  selector: 'app-Reviews',
  templateUrl: './Reviews.component.html',
  styleUrls: ['./Reviews.component.css']
})
export class ReviewsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  reviews: Reviews = new Reviews();
  reviewsData: Reviews[] = []
  reviewsId: number = 0;

  constructor(
    private reviewsService: ReviewsService,

  ) { }

  ngOnInit(): any {
    this.GetReviews();
  }

  // By using this method we will get the Reviews 
  GetReviews(): any {
    this.reviewsService.GetReviews().subscribe((res: any) => {
      this.reviewsData = res;

    })
  }

  // By using this method we will get the Reviews based on the Id
  GetReviewsById(Id: number): any {
    this.reviewsService.GetReviewsById(Id).subscribe((res: any) => {
      this.reviews = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Reviews based on Reviews
  AddReviews(): any {
    this.reviewsService.AddReviews(this.reviews).subscribe((res: any) => {
      this.GetReviews();
      this.reviews = new Reviews();
    })
  }

   // By uing this method we will Update the Reviews based on Reviews
  UpdateReviews(): any {
    this.reviewsService.UpdateReviews(this.reviews).subscribe((res: any) => {
      this.GetReviews();
      this.reviews = new Reviews();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Reviews based on the Id
  DeleteReviews(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.reviewsService.DeleteReviews(Id).subscribe((res: any) => {
        this.GetReviews();
        this.reviews = new Reviews();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetReviews();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetReviews();
  }
}

