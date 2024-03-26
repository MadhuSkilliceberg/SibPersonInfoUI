import { Component, OnInit } from '@angular/core';
import { Company, CompanyModel } from 'src/app/Models/Company-reg';
import { CompanyReviews } from 'src/app/Models/CompanyReviews';
import { CompanyReviewsCommentModel } from 'src/app/Models/CompanyReviewsComment';
import { Reviews } from 'src/app/Models/Reviews';
import { CompanyService } from 'src/app/services/company/company.service';
import { CompanyReviewsService } from 'src/app/services/companyreviews/companyreviews.service';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';

@Component({
  selector: 'app-company-profile-post',
  templateUrl: './company-profile-post.component.html',
  styleUrls: ['./company-profile-post.component.css']
})
export class CompanyProfilePostComponent implements OnInit {
  company: Company = new Company();
  companyReviews: Reviews[] = [];

  review: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  constructor(private companyReviewsService: CompanyReviewsService,private reviewsService: ReviewsService,  private companyService: CompanyService,) {

  }
  ngOnInit(): void {
    debugger
    this.GetCompanyById(1)
  }
  // By using this method we will get the Company based on the Id
  GetCompanyReviewById(id: number): any {
    this.companyReviewsService.GetByCompanyReviewComapanyId(id).subscribe((res: any) => {
      debugger
      this.companyReviews = res;
      this.companyReviews.forEach(element => {
        this.GetByCompanyReviewComments(element.Id,element);
        //element.Comments.push(new CompanyReviewsCommentModel());
      });

      debugger
      //if(this.company!=null&&this.company!=undefined&&this.company.companyreviews==undefined)
      //this.company.companyreviews.push(new CompanyReviews());
    });
  }


  GetCompanyReviewById1(id: number): any {
    this.companyReviewsService.GetByCompanyReviewComapanyId(id).subscribe((res: any) => {
      debugger
      this.companyReviews = res;
      this.companyReviews.forEach(element => {
        this.GetCompanyReviewTreeHierarchical(element.Id,element);
        //element.Comments.push(new CompanyReviewsCommentModel());
      });

      debugger
      //if(this.company!=null&&this.company!=undefined&&this.company.companyreviews==undefined)
      //this.company.companyreviews.push(new CompanyReviews());
    });
  }


  // By using this method we will get the Company based on the Id
  GetCompanyById(Id: number): any {
    this.companyService.GetCompanyById(Id).subscribe((res: any) => {
      this.company = res;
      this.GetCompanyReviewById(1)
    })
  }

  // By using this method we will get the Company based on the Id
  GetCompanyReviewTreeHierarchical(id: number,review:Reviews): any {
    this.companyReviewsService.GetCompanyReviewTreeHierarchical(id).subscribe((res: any) => {
      review.Comments = res;
      debugger
      //if(this.company!=null&&this.company!=undefined&&this.company.companyreviews==undefined)
      //this.company.companyreviews.push(new CompanyReviews());
    });
  }

  // By using this method we will get the Company based on the Id
  GetCommentsTreeHierarchical(id: number,review:CompanyReviewsCommentModel): any {
    this.companyReviewsService.GetCommentsTreeHierarchical([id]).subscribe((res: any) => {
      review.children = res;
      debugger
      //if(this.company!=null&&this.company!=undefined&&this.company.companyreviews==undefined)
      //this.company.companyreviews.push(new CompanyReviews());
    });
  }

  

   // By using this method we will get the Company based on the Id
   GetByCompanyReviewComments(reviewid: number,review:Reviews): any {
    this.companyReviewsService.GetByCompanyReviewComments(reviewid).subscribe((res: any) => {
      review.Comments = res;
      debugger
      //if(this.company!=null&&this.company!=undefined&&this.company.companyreviews==undefined)
      //this.company.companyreviews.push(new CompanyReviews());
    });
  }
  
  
  // By uing this method we will Add the Reviews based on Reviews
  AddReviews(companyReviews: Reviews): any {
    this.reviewsService.AddReviews(companyReviews).subscribe((res: any) => {
      this.GetCompanyReviewById(1)
      //this.reviews = new Reviews();
    })
  }

}
