import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/Models/Company';
import { CompanyModel, CompanyDetail } from './../../Models/Company-reg';
import { CompanyService } from './../../services/company/company.service'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { CompanyAddress } from 'src/app/Models/CompanyAddress';
import { CompanyAddressService } from './../../services/companyaddress/companyaddress.service'
import { Countries } from 'src/app/Models/Countries';
import { States } from 'src/app/Models/States';
import { StatesService } from 'src/app/services/states/states.service';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { CompanyContacts } from 'src/app/Models/CompanyContacts';
import { CompanyContactsService } from './../../services/companycontacts/companycontacts.service'
import { ContactType } from 'src/app/Models/ContactType';
import { ContactTypeService } from 'src/app/services/contacttype/contacttype.service';
import { CompanyEmails } from 'src/app/Models/CompanyEmails';
import { CompanyEmailsService } from './../../services/companyemails/companyemails.service';
import { CompanyReviews } from 'src/app/Models/CompanyReviews';
import { CompanyReviewsService } from './../../services/companyreviews/companyreviews.service'
import { Reviews } from 'src/app/Models/Reviews';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {


  isSave: Boolean = true;
  isUpdate: Boolean = false;

  company: Company = new Company();
  // companyData: Company[] = []
  companyaddress: CompanyAddress = new CompanyAddress();
  companyaddressData: CompanyAddress[] = []
  companyaddressId: number = 10;


  statesData: States[] = [];

  countriesData: Countries[] = [];
  companycontacts: CompanyContacts = new CompanyContacts();

  contacttypeData: ContactType[] = [];

  companyemails: CompanyEmails = new CompanyEmails();

  companyreviews: CompanyReviews = new CompanyReviews();

  companyreviewsData: Reviews[] = [];


  reviews: Reviews = new Reviews();
  reviewsData: Reviews[] = []

  companymodel: CompanyModel = new CompanyModel();
  companydetail: CompanyDetail = new CompanyDetail();
  companyId: number = 0;
  ngOnInit(): any {
    this.InitialLoad();
    this.GetCompanyAddress();
    this.GetStates();
    this.GetCountries();
    this.GetCompanyById(this.companyaddressId);
    this.GetContactType();
  }


  endpointUrl!: string;
  constructor(
    private companyaddressService: CompanyAddressService,
    private companyService: CompanyService,
    private statesService: StatesService,
    private countriesService: CountriesService,
    private companycontactsService: CompanyContactsService,
    private contacttypeService: ContactTypeService,
    private companyemailsService: CompanyEmailsService,
    private companyreviewsService: CompanyReviewsService,
    private reviewsService: ReviewsService,
    private route: ActivatedRoute
  ) {
    this.endpointUrl = environment.baseUrl + 'Company/';
    this.route.paramMap.subscribe((params) => {
    this.companyaddressId = Number(params.get('id'));
    });
  }


  //initial data getting start
  InitialLoad() {

    this.companydetail.company = new Company();
    this.companydetail.companyaddress =[];
    this.companydetail.companycontacts  =[];
    this.companydetail.companyemails  =[];
    this.companyaddressData.push(new CompanyAddress());

    this.companyaddress.companycontactsData.push(new CompanyContacts());

    this.companyaddress.companyemailsData.push(new CompanyEmails());

    this.companyreviewsData.push(new Reviews());
  }


  // By using this method we will get the Company based on the Id
  GetCompanyById(id: number): any {
    debugger
    this.companyService.GetCompanyById(id).subscribe((res: any) => {
      this.companydetail.company = res;
      debugger
      if (this.companydetail.company == null) {
        this.companydetail.company = new Company();
      }
      this.isSave = false;
      this.isUpdate = true;
    });
  }



  

  //By using this method we will get the CompanyAddress
  GetCompanyAddressIdByCompanyId(id: any): any {
    this.companyaddressService
      .GetCompanyAddressIdByCompanyId(id)
      .subscribe((res: any) => {
        this.companydetail.companyaddress = res;
        if (!(
          this.companydetail.companyaddress &&
          this.companydetail.companyaddress.length !== 0
        )) {
          this.companydetail.companyaddress = [];
          this.companydetail.companyaddress.push(
            new CompanyAddress()
          );
          this.CompanyAddressPush(this.companydetail.companyaddress[0]);
          this.CompanyAddressPush(
            this.companydetail.companyaddress[0]
          );
        }
        else {
          this.companydetail.companyaddress.forEach((element) => {
            this.GetCompanyContactsByCompanyAddressId(element);
            this.GetCompanyEmailByCompanyAddressId(element);
          });
        }
      });
  }



   CompanyAddressPush(companyaddress: CompanyAddress) {
    if (companyaddress.companycontactsData.length < 1) {
      companyaddress.companycontactsData.push(new CompanyContacts());
    }
  }

  //this method is for the pluse button 
  CompanyAddressPushButton(companyaddress: CompanyAddress) {

   companyaddress.companycontactsData.push(new CompanyContacts());
 }





  // By Using This method We Will Get The CompanyContacts Data By CompanyAddressId
  GetCompanyContactsByCompanyAddressId(element: CompanyAddress): any {
    this.companycontactsService
      .GetCompanyContactsByCompanyAddressId(element.Id)
      .subscribe((res: any) => {
        // if (element.institutioncontactsData.length === 0) {
        element.companycontactsData = res;

        this.CompanyAddressPush(element);
        // }
      });
  }


  

  //By Using This method We Will Get The CompanyEmail Data By Address CompanyAddressId
  GetCompanyEmailByCompanyAddressId(element: CompanyAddress): any {
    this.companyemailsService
      .GetCompanyEmailByCompanyAddressId(element.Id)
      .subscribe((res: any) => {
        element.companyemailsData = res;
        element.companyemailsData.forEach((element1) => {
          // element1.IsDeleted = false;
        });
        this.CompanyAddressPushButton(element);
      });
  }


  // By using this method we will get the CompanyAddress 
  GetCompanyAddress(): any {
    this.companyaddressService.GetCompanyAddressById(this.companyId).subscribe((res: any) => {
      this.companyaddressData = res;
      if (this.companyaddressData == null) {
        this.companyaddressData = [];
        this.companyaddressData.push(new CompanyAddress());
      }

    })
  }


  // By uing this method we will Add the CompanyAddress based on CompanyAddress
  AddCompanyAddress(): any {
    this.companyaddressService.AddCompanyAddress(this.companyaddress).subscribe((res: any) => {
      this.GetCompanyAddress();
      this.companyaddress = new CompanyAddress();
    })
  }

  // By using this method we will get the States 
  GetStates(): any {
    this.statesService.GetStates().subscribe((res: any) => {
      this.statesData = res;

    })
  }


  // By using this method we will get the Countries 
  GetCountries(): any {
    this.countriesService.GetCountries().subscribe((res: any) => {
      this.countriesData = res;

    })
  }


  GetCompanyContacts(): any {
    this.companycontactsService.GetCompanyContactsByCompanyId(this.companyId).subscribe((res: any) => {
      this.companyaddress.companycontactsData = res;
      if (this.companyaddress.companycontactsData == null) {
        this.companyaddress.companycontactsData = [];
        this.companyaddress.companycontactsData.push(new CompanyContacts());
      }
    })
  }


  // By using this method we will get the ContactType 
  GetContactType(): any {
    this.contacttypeService.GetContactType().subscribe((res: any) => {
      this.contacttypeData = res;

    })
  }

  // By using this method we will get the CompanyEmails 
  GetCompanyEmails(): any {
    this.companyemailsService.GetByCompanyEmailComapnyId(this.companyId).subscribe((res: any) => {
      this.companyaddress.companyemailsData = res;
      if (this.companyaddress.companyemailsData == null) {
        this.companyaddress.companyemailsData = [];
        this.companyaddress.companyemailsData.push(new CompanyEmails());

      }

    })
  }


  CompanyObjectPush(objectTypeName: string) {

    if (objectTypeName != null && objectTypeName != undefined && objectTypeName.length != 0) {
      switch (objectTypeName) {
        // case 'Company':
        //   this.companyData.push(new Company());
        //   break;
        case 'CompanyAddress':
          this.companyaddressData.push(new CompanyAddress());
          break;
        case 'CompanyContacts':
          this.companyaddress.companycontactsData.push(new CompanyContacts());
          break;
        case 'CompanyEmails':
          this.companyaddress.companyemailsData.push(new CompanyEmails());
          break;
        case 'Reviews':
          this.companyreviewsData.push(new Reviews());
          break;
        default:
          console.log("No such object exists!");
          break;
      }
    }
  }


  ArrayObjectRemoveAt(objectTypeName: any, index: number) {
    objectTypeName.splice(index, 1);
  }




  // //By using this method add Company model 
  // OnSaveCompanyModel() {

  //   this.companymodel.companys = this.company;
  //   this.companymodel.companyaddress = this.companyaddressData;
  //   this.companymodel.companycontacts = this.companycontactsData;
  //   this.companymodel.companyemails = this.companyemailsData;
  //   this.companymodel.companyreviews = this.companyreviewsData;


  //   this.companyService.AddCompanyModel(this.companymodel).subscribe((res: any) => {
  //     if (res)
  //       alert('data saved successfully');
  //     else
  //       alert('data not saved');
  //   })
  //   this.companydetail = new CompanyDetail();
  // }


  //By using this method add Company Detail 
  OnSaveCompanyDetail() {
    debugger
    // this.companydetail.company = this.company;
    this.companydetail.companyaddress = this.companyaddressData;
    this.companydetail.companycontacts = this.companyaddress.companycontactsData;
    this.companydetail.companyemails = this.companyaddress.companyemailsData;
    this.companydetail.companyreviews = this.companyreviewsData;
    // this.companydetail.companyreviews[0] = this.reviews;

    debugger

    this.companyService.AddCompanyDetail(this.companydetail).subscribe((res: any) => {
      if (res == true)
        alert('data saved successfully');
      else
        alert('data not saved');
    })
    // this.companydetail = new CompanyDetail();
  }

}
