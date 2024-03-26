import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-company-profile-photos',
  templateUrl: './company-profile-photos.component.html',
  styleUrls: ['./company-profile-photos.component.css']
})
export class CompanyProfilePhotosComponent  implements OnInit {


constructor(private categoryservice:CategoryService){

}
  ngOnInit(): void {
   this.GetCompanyById(1);
  }
  
  // By using this method we will get the Company based on the Id
  GetCompanyById(Id: number): any {
    debugger
    // this.categoryservice.GetTreeHierarchical().subscribe((res: any) => {
      
    //   debugger
    // })
  }

}
