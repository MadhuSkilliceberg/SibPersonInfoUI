import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/Models/Company';
import { CompanyModel,CompanyDetail } from './../../Models/Company-reg';
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
@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {




  company: Company = new Company();
  companyData: Company[] = []
  companyaddress: CompanyAddress = new CompanyAddress();
  companyaddressData: CompanyAddress[] = []
  companyaddressId: number = 0;


  statesData: States[] = [];

  countriesData: Countries[] = [];
  companycontacts: CompanyContacts = new CompanyContacts();
  companycontactsData: CompanyContacts[] = []
  contacttypeData: ContactType[] = []
  companyemails: CompanyEmails = new CompanyEmails();
  companyemailsData: CompanyEmails[] = [];
  companyreviews: CompanyReviews = new CompanyReviews();
  companyreviewsData: CompanyReviews[] = []


  reviewsData: Reviews[] = []

  companymodel:CompanyModel =new  CompanyModel();
  companydetail:CompanyDetail=new CompanyDetail();

  ngOnInit(): any {
    this.GetCompany();
    this.GetCompanyAddress();
    this.GetStates();
    this.GetCountries();
    this.GetCompanyContacts();
    this.GetContactType();
    this.GetCompanyReviews();
    this.GetReviews();
  }
  endpointUrl!: string;
  constructor(
    private http: HttpClient,
    private companyaddressService: CompanyAddressService,
    private companyService: CompanyService,
    private statesService: StatesService,
    private countriesService: CountriesService,
    private companycontactsService: CompanyContactsService,
    private contacttypeService: ContactTypeService,
    private companyemailsService: CompanyEmailsService,
    private companyreviewsService: CompanyReviewsService,
    private reviewsService: ReviewsService,
  ) {
    this.endpointUrl = environment.baseUrl + 'Company/';

  }

  // By using this method we will get the Company 
  GetCompany(): any {
    return this.http.get(this.endpointUrl + "GetCompany");
  }

  // By using this method we will get the Company based on the Id
  GetCompanyById(id: number): any {
    return this.http.get(this.endpointUrl + "GetCompanyById/" + id);
  }

  // By uing this method we will Add the Company based on Company
  AddCompany(company: Company): any {
    return this.http.post(this.endpointUrl + "AddCompany", company)
  }

  // By uing this method we will Update the Company based on Company
  UpdateCompany(company: Company): any {
    return this.http.put(this.endpointUrl + "UpdateCompany", company)
  }

  // By using this method we will delete the Company based on the Id
  DeleteCompany(id: number): any {
    return this.http.delete(this.endpointUrl + "DeleteCompany/" + id);
  }



  // By using this method we will get the CompanyAddress 
  GetCompanyAddress(): any {
    this.companyaddressService.GetCompanyAddress().subscribe((res: any) => {
      this.companyaddressData = res;

    })
  }

  // By using this method we will get the CompanyAddress based on the Id
  GetCompanyAddressById(Id: number): any {
    this.companyaddressService.GetCompanyAddressById(Id).subscribe((res: any) => {
      this.companyaddress = res;

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
    this.companycontactsService.GetCompanyContacts().subscribe((res: any) => {
      this.companycontactsData = res;

    })
  }

  // By using this method we will get the CompanyContacts based on the Id
  GetCompanyContactsById(Id: number): any {
    this.companycontactsService.GetCompanyContactsById(Id).subscribe((res: any) => {
      this.companycontacts = res;

    })
  }

  // By uing this method we will Add the CompanyContacts based on CompanyContacts
  AddCompanyContacts(): any {
    this.companycontacts.CompanyAddressId = Number(this.companycontacts.CompanyAddressId);
    this.companycontacts.ContactTypeId = Number(this.companycontacts.ContactTypeId);
    this.companycontactsService.AddCompanyContacts(this.companycontacts).subscribe((res: any) => {
      this.GetCompanyContacts();
      this.companycontacts = new CompanyContacts();
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
    this.companyemailsService.GetCompanyEmails().subscribe((res: any) => {
      this.companyemailsData = res;

    })
  }

  // By using this method we will get the CompanyEmails based on the Id
  GetCompanyEmailsById(Id: number): any {
    this.companyemailsService.GetCompanyEmailsById(Id).subscribe((res: any) => {
      this.companyemails = res;

    })
  }

  // By uing this method we will Add the CompanyEmails based on CompanyEmails
  AddCompanyEmails(): any {
    this.companyemailsService.AddCompanyEmails(this.companyemails).subscribe((res: any) => {
      this.GetCompanyEmails();
      this.companyemails = new CompanyEmails();
    })
  }

  GetCompanyReviews(): any {
    this.companyreviewsService.GetCompanyReviews().subscribe((res: any) => {
      this.companyreviewsData = res;

    })
  }

  // By using this method we will get the CompanyReviews based on the Id
  GetCompanyReviewsById(Id: number): any {
    this.companyreviewsService.GetCompanyReviewsById(Id).subscribe((res: any) => {
      this.companyreviews = res;

    })
  }

  // By uing this method we will Add the CompanyReviews based on CompanyReviews
  AddCompanyReviews(): any {
    this.companyreviewsService.AddCompanyReviews(this.companyreviews).subscribe((res: any) => {
      this.GetCompanyReviews();
      this.companyreviews = new CompanyReviews();
    })
  }


  // By using this method we will get the Reviews 
  GetReviews(): any {
    this.reviewsService.GetReviews().subscribe((res: any) => {
      this.reviewsData = res;

    })
  }


  CompanyObjectPush(objectTypeName: string) {

    if (objectTypeName != null && objectTypeName != undefined && objectTypeName.length != 0) {
      switch (objectTypeName) {
        case 'Company':
          this.companyData.push(new Company());
          break;
        case 'CompanyAddress':
          this.companyaddressData.push(new CompanyAddress());
          break;
        case 'CompanyContacts':
          this.companycontactsData.push(new CompanyContacts());
          break;
        case 'CompanyEmails':
          this.companyemailsData.push(new CompanyEmails());
          break;
        case 'CompanyReviews':
          this.companyreviewsData.push(new CompanyReviews());
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




 //By using this method add Company model 
 OnSaveCompanyModel() {
  debugger
  this.companymodel.companys = this.company;
  this.companymodel.companyaddress = this.companyaddress;
  this.companymodel.companycontacts = this.companycontacts;
  this.companymodel.companyemails = this.companyemails;
  this.companymodel.companyreviews = this.companyreviews;
  debugger

  this.companyService.AddCompanyModel(this.companymodel).subscribe((res: any) => {
    if (res)
      alert('data saved successfully');
    else
      alert('data not saved');
  })
}


//By using this method add Company Detail 
  OnSaveCompanyDetail() {
    debugger
    this.companydetail.company = this.company;
    this.companydetail.companyaddress=this.companyaddressData;
    this.companydetail.companycontacts = this.companycontactsData;
    this.companydetail.companyemail = this.companyemailsData;
    this.companydetail.companyreviews = this.companyreviewsData;
    debugger

    this.companyService.AddCompanyDetail(this.companydetail).subscribe((res: any) => {
      if (res)
        alert('data saved successfully');
      else
        alert('data not saved');
    })
  }

}
