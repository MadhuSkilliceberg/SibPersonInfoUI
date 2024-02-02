import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Countries } from 'src/app/Models/Countries';
import { Courses } from 'src/app/Models/Courses';
import { InstitutionAddress } from 'src/app/Models/InstitutionAddress';
import { InstitutionContacts } from 'src/app/Models/InstitutionContacts';
import { InstitutionCourses } from 'src/app/Models/InstitutionCourses';
import { InstitutionEmails } from 'src/app/Models/InstitutionEmails';
import { Institutions, InstitutionsDetails } from 'src/app/Models/Institutions';
import { Medium } from 'src/app/Models/Medium';
import { QulificationType } from 'src/app/Models/QulificationType';
import { States } from 'src/app/Models/States';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { InstitutionAddressService } from 'src/app/services/institutionaddress/institutionaddress.service';
import { InstitutionContactsService } from 'src/app/services/institutioncontacts/institutioncontacts.service';
import { InstitutionCoursesService } from 'src/app/services/institutioncourses/institutioncourses.service';
import { InstitutionEmailsService } from 'src/app/services/institutionemails/institutionemails.service';
import { InstitutionsService } from 'src/app/services/institutions/institutions.service';
import { MediumService } from 'src/app/services/medium/medium.service';
import { QulificationTypeService } from 'src/app/services/qulificationtype/qulificationtype.service';
import { StatesService } from 'src/app/services/states/states.service';

@Component({
  selector: 'app-institution-reg',
  templateUrl: './institution-reg.component.html',
  styleUrls: ['./institution-reg.component.css'],
})
export class InstitutionRegComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  LookUpinstitutions: Institutions[] = [];
  institutionsId: number = 0;

  lookUpQulificationtypeData: QulificationType[] = [];
  LookUpMedium: Medium[] = [];
  lookUpstates: States[] = [];
  lookUpCountries: Countries[] = [];
  lookUpCourses: Courses[] = [];

  institutionId: number = 10;
  institutionaddressId: number = 10;

  tutioncoursesData: InstitutionCourses[] = [];

  institutionsDetails: InstitutionsDetails = new InstitutionsDetails();
  constructor(
    private institutionsService: InstitutionsService,
    private qualificationservices: QulificationTypeService,
    private mediumService: MediumService,
    private institutionemailsService: InstitutionEmailsService,
    private institutioncontactsService: InstitutionContactsService,
    private statesService: StatesService,
    private coursesService: CoursesService,
    private countriesService: CountriesService,
    private institutionaddressService: InstitutionAddressService,
    private institutioncoursesService: InstitutionCoursesService,
    private route: ActivatedRoute
  ) {

    this.route.paramMap.subscribe((params) => {
      this.institutionId = Number(params.get('id'));
    });
  }

  // initialsetting Is Used To
  initialsetting() {
    this.institutionsDetails = new InstitutionsDetails();
    this.institutionsDetails.institutions = new Institutions();
    this.LookUpinstitutions.push(new Institutions());
    this.institutionsDetails.institutionCourses.push(new InstitutionCourses());
    this.institutionsDetails.institutionaddress.push(new InstitutionAddress());
  }

  // First Call When Page Was Loaded
  ngOnInit(): any {
    this.GetInstitutionsById(this.institutionId);
    this.GetInstitutionAddressByInstituteId(this.institutionId);
    this.GetInstitutionCourses();
    this.initialsetting();
    //this.GetInstitutionContactsByAddressId(this.institutionaddressId);
    //Look Up List
    this.GetMedium();
    this.GetQulificationType();
    this.GetCourses();
    this.GetCountries();
    this.GetStates();
  }

  //initial data getting start
  // By using this method we will get the Institutions based on the Id
  GetInstitutionsById(Id: number): any {
    this.institutionsService.GetInstitutionsById(Id).subscribe((res: any) => {
      this.institutionsDetails.institutions = res;
      if (this.institutionsDetails.institutions == null) {
        this.institutionsDetails.institutions = new Institutions();
      }
      this.isSave = false;
      this.isUpdate = true;
    });
  }

  // By using this method we will get the InstitutionAddress
  GetInstitutionAddressByInstituteId(id: any): any {
    debugger
    this.institutionaddressService
      .GetInstitutionAddressByInstituteId(id)
      .subscribe((res: any) => {

        this.institutionsDetails.institutionaddress = res;

        if (!(this.institutionsDetails.institutionaddress && this.institutionsDetails.institutionaddress.length !== 0)) {
          this.institutionsDetails.institutionaddress = [];
          this.institutionsDetails.institutionaddress.push(new InstitutionAddress());
          this.AddressEmailPush(this.institutionsDetails.institutionaddress[0]);
          debugger
          this.AddressContactPush(this.institutionsDetails.institutionaddress[0]
          );
        } else {
          this.institutionsDetails.institutionaddress.forEach((element) => {
            this.GetInstitutionContactsByAddressId(element);
            this.GetInstitutionEmailsByAddressId(element);
          });
        }
      });
  }

  // By Using This method We Will Get The InstitutionContact Data By Address Id
  GetInstitutionContactsByAddressId(element: InstitutionAddress): any {

    this.institutioncontactsService
      .GetInstitutionContactsByAddressId(element.Id)
      .subscribe((res: any) => {
        // if (element.institutioncontactsData.length === 0) {
        element.institutioncontacts = res;

        this.AddressContactPush(element);
        // }
      });
  }

  //By Using This method We Will Get The InstitutionEmail Data By Address Id
  GetInstitutionEmailsByAddressId(element: InstitutionAddress): any {

    this.institutionemailsService
      .GetInstitutionEmailsByAddressId(element.Id)
      .subscribe((res: any) => {
        element.institutionemails = res;
        element.institutionemails.forEach(element1 => {
          element1.IsDeleted = false;
        });

        this.AddressEmailPush(element);
      });
  }

  // GetInstitutionContactsByAddressId(id:any): any {
  //   debugger;
  //       this.institutioncontactsService .GetInstitutionContactsByAddressId(id)  .subscribe((res: any) => {
  //         this.institutionsDetails.institutioncontacts = res;

  //           if (!(this.institutionsDetails.institutioncontacts && this.institutionsDetails.institutioncontacts.length !==0 )) {
  //             this.institutionsDetails.institutioncontacts = [];
  //             this.institutionsDetails.institutioncontacts.push( new InstitutionContacts()
  //             );
  //           }
  //           });
  //       }

  // By using this method we will get the InstitutionCourses
  GetInstitutionCourses(): any {
    this.institutioncoursesService
      .GetInstitutionCourses()
      .subscribe((res: any) => {
        this.institutionsDetails.institutionCourses = res;
      });
  }
  //initial data getting end

  AddressEmailPush(institutionAddress: InstitutionAddress) {
    debugger
    if (institutionAddress.institutionemails.length < 1) {
      institutionAddress.institutionemails.push(new InstitutionEmails());
    }
  }

  AddressContactPush(institutionAddress: InstitutionAddress) {
    debugger
    if (institutionAddress.institutioncontacts.length < 1) {
      institutionAddress.institutioncontacts.push(new InstitutionContacts());
    }
  }




  AddressEmailPush1(institutionAddress: InstitutionAddress) {

    // if (institutionAddress.institutionemails.length < 1) {
    var data = new InstitutionEmails();
    data.IsDeleted = false;
    institutionAddress.institutionemails.push(new InstitutionEmails());
    // }
  }


  AddressContactPush1(institutionAddress: InstitutionAddress) {

    // if (institutionAddress.institutioncontacts.length < 1) {
    institutionAddress.institutioncontacts.push(new InstitutionContacts());
    //  }
  }

  UserObjectPush(objectTypeName: string) {
    if (objectTypeName != null && objectTypeName != undefined && objectTypeName.length != 0) {
      switch (objectTypeName) {
        case 'Institutions':
          this.LookUpinstitutions.push(new Institutions());
          break;
        case 'InstitutionEmails':
          this.institutionsDetails.institutionemail.push(new InstitutionEmails());
          break;
        case 'InstitutionContacts':
          this.institutionsDetails.institutioncontacts.push(new InstitutionContacts());
          break;
        case 'InstitutionCourses':
          this.institutionsDetails.institutionCourses.push(new InstitutionCourses());
          break;
        case 'InstitutionAddress':
          var address = new InstitutionAddress();
          address.institutioncontacts.push(new InstitutionContacts());
          address.institutionemails.push(new InstitutionEmails());
          this.institutionsDetails.institutionaddress.push(address);
          break;
        default:
          console.log('No such object exists!');
          break;
      }
    }
  }

  ArrayObjectRemoveAt(arraydata: any, index: number) {
    debugger;
    // var valueAtIndex1 = arraydata.at(1);
    // valueAtIndex1.IsDeleted = true;
    arraydata.splice(index, 1);



  }

  OnSaveinstitutionDetail() {
    this.institutionsService
      .AddInstitutionsDetails(this.institutionsDetails)
      .subscribe((res: any) => {
        if (res) alert('data saved successfully');
        else alert('data not saved');
      });
  }

  //Look up get Starting

  //this Method is from qualificationtype component
  GetQulificationType(): any {
    this.qualificationservices.GetQulificationType().subscribe((res: any) => {
      this.lookUpQulificationtypeData = res;
    });
  }

  // By using this method we will get the Medium
  GetMedium(): any {
    this.mediumService.GetMedium().subscribe((res: any) => {
      this.LookUpMedium = res;
    });
  }

  // By using this method we will get the States
  GetStates(): any {
    this.statesService.GetStates().subscribe((res: any) => {
      this.lookUpstates = res;
    });
  }

  // By using this method we will get the Countries
  GetCountries(): any {
    this.countriesService.GetCountries().subscribe((res: any) => {
      this.lookUpCountries = res;
    });
  }

  // By using this method we will get the Courses
  GetCourses(): any {
    this.coursesService.GetCourses().subscribe((res: any) => {
      this.lookUpCourses = res;

    });
  }

  //Look up get End





  // By using this method we will delete the InstitutionEmails based on the Id
  // DeleteInstitutionEmails(Id: number ,arraydata: any, index: number): any {
  //   //  if (confirm("Do you want delete this record?")) {
  //       this.institutionemailsService.DeleteInstitutionEmails(Id).subscribe((res: any) => {
  //         this.institutionsDetails. institutionemail 
  //       arraydata.splice(index, 1);
  //       })
  //    // }
  //   }


}
