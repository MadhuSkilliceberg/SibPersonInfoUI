import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Reviews } from '../../Models/Reviews';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Review/';
  }

   // By using this method we will get the Reviews 
  GetReviews(): any {
    return this.http.get(this.endpointUrl+"GetReviews");
  }
  
  // By using this method we will get the Reviews based on the Id
  GetReviewsById(id: number): any {
    return this.http.get(this.endpointUrl+"GetReviewsById/" + id);
  }

  // By uing this method we will Add the Reviews based on Reviews
  AddReviews(reviews: Reviews): any {
    return this.http.post(this.endpointUrl+"AddReviews", reviews)
  }

   // By uing this method we will Update the Reviews based on Reviews
   UpdateReviews(reviews: Reviews): any {
    return this.http.put(this.endpointUrl+"UpdateReviews", reviews)
  }

// By using this method we will delete the Reviews based on the Id
DeleteReviews(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteReviews/" + id);
  }
}
