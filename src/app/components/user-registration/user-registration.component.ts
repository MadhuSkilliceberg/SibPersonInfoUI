
import { Component, OnInit } from '@angular/core';
import { UserDetail, UserModel, Users } from 'src/app/Models/Users';
import { UsersService } from './../../services/users/users.service'
import { Gender } from 'src/app/Models/Gender';
import { GenderService } from 'src/app/services/gender/gender.service';
import { MarritalStatusService } from 'src/app/services/marritalstatus/marritalstatus.service';
import { MarritalStatus } from 'src/app/Models/MarritalStatus';
import { UserTypes } from 'src/app/Models/UserTypes';
import { UserTypesService } from 'src/app/services/usertypes/usertypes.service';
import { UserSkillsService } from 'src/app/services/userskills/userskills.service';
import { SkillsService } from 'src/app/services/skills/skills.service';
import { UserSkills } from 'src/app/Models/UserSkills';
import { Skills } from 'src/app/Models/Skills';
import { UserEducationDetailsService } from 'src/app/services/usereducationdetails/usereducationdetails.service';
import { QulificationTypeService } from 'src/app/services/qulificationtype/qulificationtype.service';
import { InstitutionsService } from 'src/app/services/institutions/institutions.service';
import { UserEducationDetails } from 'src/app/Models/UserEducationDetails';
import { QulificationType } from 'src/app/Models/QulificationType';
import { Institutions } from 'src/app/Models/Institutions';
import { UserContactsService } from 'src/app/services/usercontacts/usercontacts.service';
import { ContactTypeService } from 'src/app/services/contacttype/contacttype.service';
import { UserContacts } from 'src/app/Models/UserContacts';
import { ContactType } from 'src/app/Models/ContactType';
import { UserEmailsService } from 'src/app/services/useremails/useremails.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserEmails } from 'src/app/Models/UserEmails';
import { UserAddressDetailsService } from 'src/app/services/useraddressdetails/useraddressdetails.service';
import { StatesService } from 'src/app/services/states/states.service';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { UserAddressDetails } from 'src/app/Models/UserAddressDetails';
import { States } from 'src/app/Models/States';
import { Countries } from 'src/app/Models/Countries';
import { UserCoursesService } from 'src/app/services/usercourses/usercourses.service';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { UserCourses } from 'src/app/Models/UserCourses';
import { Courses } from 'src/app/Models/Courses';
import { UserCompanyService } from 'src/app/services/usercompany/usercompany.service';
import { CompanyService } from 'src/app/services/company/company.service';
import { DesignationService } from 'src/app/services/designation/designation.service';
import { UserCompany } from 'src/app/Models/UserCompany';
import { Company } from 'src/app/Models/Company';
import { Designation } from 'src/app/Models/Designation';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  [x: string]: any;

  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  users: Users = new Users();
  usersData: Users[] = [];
  usersId: number = 0;

  genderData: Gender[] = [];
  marritalstatusData: MarritalStatus[] = [];
  usertypesData: UserTypes[] = []



  userskills: UserSkills = new UserSkills();
  userskillsData: UserSkills[] = []
  userskillsId: number = 0;

  skillsData: Skills[] = []
  //usersData: Users[] = []
  usereducationdetails: UserEducationDetails = new UserEducationDetails();
  usereducationdetailsData: UserEducationDetails[] = []
  usereducationdetailsId: number = 0;
  qulificationtypeData: QulificationType[] = []
  institutionsData: Institutions[] = []

  usercontacts: UserContacts = new UserContacts();
  usercontactsData: UserContacts[] = []
  usercontactsId: number = 0;
  contacttypeData: ContactType[] = []

  useremails: UserEmails = new UserEmails();
  useremailsData: UserEmails[] = []
  useremailsId: number = 0;


  useraddressdetails: UserAddressDetails = new UserAddressDetails();
  useraddressdetailsData: UserAddressDetails[] = []
  useraddressdetailsId: number = 0;
  statesData: States[] = []
  countriesData: Countries[] = []

  usercourses: UserCourses = new UserCourses();
  usercoursesData: UserCourses[] = []
  usercoursesId: number = 0;
  coursesData: Courses[] = []


  usercompany: UserCompany = new UserCompany();
  usercompanyData: UserCompany[] = []
  usercompanyId: number = 0;
  companyData: Company[] = []
  designationData: Designation[] = []

  userType: UserTypes = new UserTypes();


  userModel: UserModel = new UserModel();
  userDetail:UserDetail=new UserDetail();


  constructor(
    private usersService: UsersService,
    private genderService: GenderService,
    private marritalstatusService: MarritalStatusService,
    private usertypesService: UserTypesService,
    private userskillsService: UserSkillsService,
    private skillsService: SkillsService,
    private usereducationdetailsService: UserEducationDetailsService,
    private qulificationtypeService: QulificationTypeService,
    private institutionsService: InstitutionsService,
    private usercontactsService: UserContactsService,
    private contacttypeService: ContactTypeService,
    private useremailsService: UserEmailsService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private useraddressdetailsService: UserAddressDetailsService,
    private statesService: StatesService,
    private countriesService: CountriesService,
    private usercoursesService: UserCoursesService,
    private coursesService: CoursesService,
    private usercompanyService: UserCompanyService,
    private companyService: CompanyService,
    private designationService: DesignationService,
    private utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): any {
    this.GetUsers();
    this.GetGender();
    this.GetMarritalStatus();
    this.GetUserTypes();
    // this.GetUserEducationDetails();
    this.GetQulificationType();
    this.GetInstitutions();
    // this.GetUserEmails();
    this.GetContactType();
    this.GetCompanies();
    this.GetCountries();
    this.AddUserCourses();
    this.GetStates();
    this.GetSkills();
    this.GetCourses();
    this.GetDesignation();
    this.initialsetting();
  }


  initialsetting() {
    this.usercontactsData.push(new UserContacts());
    this.useraddressdetailsData.push(new UserAddressDetails());
    this.usercompanyData.push(new UserCompany());
    this.usercoursesData.push(new UserCourses());
    this.usereducationdetailsData.push(new UserEducationDetails());
    this.useremailsData.push(new UserEmails());
    this.userskillsData.push(new UserSkills());
    this.usertypesData.push(new UserTypes());

    this.users.UserTypeId = 1; 
    this.users.GenderId = 1;
  }

  // By using this method we will get the Users 
  GetUsers(): any {
    this.usersService.GetUsers().subscribe((res: any) => {
      this.usersData = res;

    })
  }

  // By using this method we will get the Users based on the Id
  GetUsersById(Id: number): any {
    this.usersService.GetUsersById(Id).subscribe((res: any) => {
      this.users = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Users based on Users
  AddUsers(): any {
    this.usersService.AddUsers(this.users).subscribe((res: any) => {
      this.GetUsers();
      this.users = new Users();
    })
  }

  // By uing this method we will Update the Users based on Users
  UpdateUsers(): any {
    this.usersService.UpdateUsers(this.users).subscribe((res: any) => {
      this.GetUsers();
      this.users = new Users();
      this.isSave = true;
      this.isUpdate = false;
    })
  }




  // By using this method we will get the Gender 
  GetGender(): any {
    this.genderService.GetGender().subscribe((res: any) => {
      this.genderData = res;

    })
  }

  // By using this method we will get the MarritalStatus 
  GetMarritalStatus(): any {
    this.marritalstatusService.GetMarritalStatus().subscribe((res: any) => {
      this.marritalstatusData = res;

    })
  }

  // By using this method we will get the UserTypes 
  GetUserTypes(): any {
    this.usertypesService.GetUserTypes().subscribe((res: any) => {
      this.usertypesData = res;

    })
  }


  isUserAuthenticated() {
    const token = localStorage.getItem("jwt");
    // if (token && !this.jwtHelper.isTokenExpired(token)) {
    //   return true;
    // }
    // else {
    //   return false;
    // }
  }

  public logOut = () => {
    localStorage.removeItem("jwt");
  }



  // By using this method we will get the UserSkills 
  GetUserSkills(): any {
    this.userskillsService.GetUserSkills().subscribe((res: any) => {
      this.userskillsData = res;

    })
  }

  // By using this method we will get the UserSkills based on the Id
  GetUserSkillsById(Id: number): any {
    this.userskillsService.GetUserSkillsById(Id).subscribe((res: any) => {
      this.userskills = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserSkills based on UserSkills
  AddUserSkills(): any {
    this.userskillsService.AddUserSkills(this.userskills).subscribe((res: any) => {
      this.GetUserSkills();
      this.userskills = new UserSkills();
    })
  }

  // By uing this method we will Update the UserSkills based on UserSkills
  UpdateUserSkills(): any {
    this.userskillsService.UpdateUserSkills(this.userskills).subscribe((res: any) => {
      this.GetUserSkills();
      this.userskills = new UserSkills();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

  // By using this method we will delete the UserSkills based on the Id
  DeleteUserSkills(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.userskillsService.DeleteUserSkills(Id).subscribe((res: any) => {
        this.GetUserSkills();
        this.userskills = new UserSkills();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetUserSkills();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetUserSkills();
  }

  // By using this method we will get the Skills 
  GetSkills(): any {
    this.skillsService.GetSkills().subscribe((res: any) => {
      this.skillsData = res;
    })
  }


  // By using this method we will get the UserEducationDetails 
  GetUserEducationDetails(): any {
    this.usereducationdetailsService.GetUserEducationDetails().subscribe((res: any) => {
      this.usereducationdetailsData = res;

    })
  }

  // By using this method we will get the UserEducationDetails based on the Id
  GetUserEducationDetailsById(Id: number): any {
    this.usereducationdetailsService.GetUserEducationDetailsById(Id).subscribe((res: any) => {
      this.usereducationdetails = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserEducationDetails based on UserEducationDetails
  AddUserEducationDetails(): any {
    this.usereducationdetailsService.AddUserEducationDetails(this.usereducationdetails).subscribe((res: any) => {
      this.GetUserEducationDetails();
      this.usereducationdetails = new UserEducationDetails();
    })
  }

  // By uing this method we will Update the UserEducationDetails based on UserEducationDetails
  UpdateUserEducationDetails(): any {
    this.usereducationdetailsService.UpdateUserEducationDetails(this.usereducationdetails).subscribe((res: any) => {
      this.GetUserEducationDetails();
      this.usereducationdetails = new UserEducationDetails();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

  GetQulificationType(): any {
    this.qulificationtypeService.GetQulificationType().subscribe((res: any) => {
      this.qulificationtypeData = res;

    })
  }

  GetInstitutions(): any {
    this.institutionsService.GetInstitutions().subscribe((res: any) => {
      this.institutionsData = res;

    })
  }


  // By using this method we will get the UserContacts 
  GetUserContacts(): any {
    this.usercontactsService.GetUserContacts().subscribe((res: any) => {
      this.usercontactsData = res;

    })
  }

  // By using this method we will get the UserContacts based on the Id
  GetUserContactsById(Id: number): any {
    this.usercontactsService.GetUserContactsById(Id).subscribe((res: any) => {
      this.usercontacts = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserContacts based on UserContacts
  AddUserContacts(): any {
    this.usercontactsService.AddUserContacts(this.usercontacts).subscribe((res: any) => {
      this.GetUserContacts();
      this.usercontacts = new UserContacts();
    })
  }

  // By uing this method we will Update the UserContacts based on UserContacts
  UpdateUserContacts(): any {
    this.usercontactsService.UpdateUserContacts(this.usercontacts).subscribe((res: any) => {
      this.GetUserContacts();
      this.usercontacts = new UserContacts();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

  // By using this method we will delete the UserContacts based on the Id
  DeleteUserContacts(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.usercontactsService.DeleteUserContacts(Id).subscribe((res: any) => {
        this.GetUserContacts();
        this.usercontacts = new UserContacts();
      })
    }
  }

  GetContactType(): any {
    this.contacttypeService.GetContactType().subscribe((res: any) => {
      this.contacttypeData = res;

    })
  }


  // By using this method we will get the UserEmails 
  GetUserEmails(): any {
    this.useremailsService.GetUserEmails().subscribe((res: any) => {
      this.useremailsData = res;

    })
  }

  // By using this method we will get the UserEmails based on the Id
  GetUserEmailsById(Id: number): any {
    this.useremailsService.GetUserEmailsById(Id).subscribe((res: any) => {
      this.useremails = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserEmails based on UserEmails
  AddUserEmails(): any {
    this.useremailsService.AddUserEmails(this.useremails).subscribe((res: any) => {
      this.GetUserEmails();
      this.useremails = new UserEmails();
    })
  }

  // By uing this method we will Update the UserEmails based on UserEmails
  UpdateUserEmails(): any {
    this.useremailsService.UpdateUserEmails(this.useremails).subscribe((res: any) => {
      this.GetUserEmails();
      this.useremails = new UserEmails();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

  // By using this method we will delete the UserEmails based on the Id
  DeleteUserEmails(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.useremailsService.DeleteUserEmails(Id).subscribe((res: any) => {
        this.GetUserEmails();
        this.useremails = new UserEmails();
      })
    }
  }


  // By using this method we will get the UserAddressDetails 
  GetUserAddressDetails(): any {
    this.useraddressdetailsService.GetUserAddressDetails().subscribe((res: any) => {
      this.useraddressdetailsData = res;

    })
  }

  // By using this method we will get the UserAddressDetails based on the Id
  GetUserAddressDetailsById(Id: number): any {
    this.useraddressdetailsService.GetUserAddressDetailsById(Id).subscribe((res: any) => {
      this.useraddressdetails = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserAddressDetails based on UserAddressDetails
  AddUserAddressDetails(): any {
    this.useraddressdetailsService.AddUserAddressDetails(this.useraddressdetails).subscribe((res: any) => {
      this.GetUserAddressDetails();
      this.useraddressdetails = new UserAddressDetails();
    })
  }

  // By uing this method we will Update the UserAddressDetails based on UserAddressDetails
  UpdateUserAddressDetails(): any {
    this.useraddressdetailsService.UpdateUserAddressDetails(this.useraddressdetails).subscribe((res: any) => {
      this.GetUserAddressDetails();
      this.useraddressdetails = new UserAddressDetails();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

  // By using this method we will delete the UserAddressDetails based on the Id
  DeleteUserAddressDetails(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.useraddressdetailsService.DeleteUserAddressDetails(Id).subscribe((res: any) => {
        this.GetUserAddressDetails();
        this.useraddressdetails = new UserAddressDetails();
      })
    }
  }


  GetStates(): any {
    this.statesService.GetStates().subscribe((res: any) => {
      this.statesData = res;

    })
  }
  GetCountries(): any {
    this.countriesService.GetCountries().subscribe((res: any) => {
      this.countriesData = res;

    })
  }

  // By using this method we will get the UserCourses 
  GetUserCourses(): any {
    this.usercoursesService.GetUserCourses().subscribe((res: any) => {
      this.usercoursesData = res;

    })
  }

  // By using this method we will get the UserCourses based on the Id
  GetUserCoursesById(Id: number): any {
    this.usercoursesService.GetUserCoursesById(Id).subscribe((res: any) => {
      this.usercourses = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserCourses based on UserCourses
  AddUserCourses(): any {
    this.usercoursesService.AddUserCourses(this.usercourses).subscribe((res: any) => {
      this.GetUserCourses();
      this.usercourses = new UserCourses();
    })
  }

  // By uing this method we will Update the UserCourses based on UserCourses
  UpdateUserCourses(): any {
    this.usercoursesService.UpdateUserCourses(this.usercourses).subscribe((res: any) => {
      this.GetUserCourses();
      this.usercourses = new UserCourses();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

  // By using this method we will delete the UserCourses based on the Id
  DeleteUserCourses(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.usercoursesService.DeleteUserCourses(Id).subscribe((res: any) => {
        this.GetUserCourses();
        this.usercourses = new UserCourses();
      })
    }
  }

  GetCourses(): any {
    this.coursesService.GetCourses().subscribe((res: any) => {
      this.coursesData = res;
    })
  }

  // By using this method we will get the UserCompany 
  GetUserCompany(): any {
    this.usercompanyService.GetUserCompany().subscribe((res: any) => {
      this.usercompanyData = res;

    })
  }

  // By using this method we will get the UserCompany based on the Id
  GetUserCompanyById(Id: number): any {
    this.usercompanyService.GetUserCompanyById(Id).subscribe((res: any) => {
      this.usercompany = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserCompany based on UserCompany
  AddUserCompany(): any {
    this.usercompanyService.AddUserCompany(this.usercompany).subscribe((res: any) => {
      this.GetUserCompany();
      this.usercompany = new UserCompany();
    })
  }

  // By uing this method we will Update the UserCompany based on UserCompany
  UpdateUserCompany(): any {
    this.usercompanyService.UpdateUserCompany(this.usercompany).subscribe((res: any) => {
      this.GetUserCompany();
      this.usercompany = new UserCompany();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

  // By using this method we will delete the UserCompany based on the Id
  DeleteUserCompany(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.usercompanyService.DeleteUserCompany(Id).subscribe((res: any) => {
        this.GetUserCompany();
        this.usercompany = new UserCompany();
      })
    }
  }

  GetCompanies() {
    this.companyService.GetCompany().subscribe((res: any) => {
      this.companyData = res;
    })
  }

  GetDesignation(): any {
    this.designationService.GetDesignation().subscribe((res: any) => {
      this.designationData = res;

    })
  }


  //By using this method add user model 
  OnSaveUserModel() {
    debugger
    this.userModel.user = this.users;
    // this.useraddressdetails.CountryId = Number(this.useraddressdetails.CountryId);
    // this.useraddressdetails.StateId = Number(this.useraddressdetails.StateId);
    this.userModel.userAddressDetails = this.useraddressdetails;
    this.userModel.userCompany = this.usercompany;
    this.userModel.userCourses = this.usercourses;
    this.userModel.userEducationDetails = this.usereducationdetails;
    this.userModel.userEmails = this.useremails;
    this.userModel.userSkills = this.userskills;
    this.userModel.userTypes = this.userType;
    this.userModel.userContacts = this.usercontacts;
    debugger

    this.usersService.AddUserModel(this.userModel).subscribe((res: any) => {
      if (res)
        alert('data saved successfully');
      else
        alert('data not saved');
    })
  }


  UserObjectPush(objectTypeName: string) {

    if (objectTypeName != null && objectTypeName != undefined && objectTypeName.length != 0) {
      switch (objectTypeName) {
        case 'UserContacts':
          this.usercontactsData.push(new UserContacts());
          break;
        case 'UserAddressDetails':
          this.useraddressdetailsData.push(new UserAddressDetails());
          break;
        case 'UserCompany':
          this.usercompanyData.push(new UserCompany());
          break;
        case 'UserCourses':
          this.usercoursesData.push(new UserCourses());
          break;
        case 'UserEducationDetails':
          this.usereducationdetailsData.push(new UserEducationDetails());
          break;
        case 'UserEmails':
          this.useremailsData.push(new UserEmails());
          break;
        case 'UserSkills':
          this.userskillsData.push(new UserSkills());
          break;
        case 'UserTypes':
          this.usertypesData.push(new UserTypes());
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


  // ArrayObjectRemoveAt(objectTypeName: any, index: number) {
  //   objectTypeName.splice(index, 1);
  //   this.utilitiesService.ArrayObjectRemoveAt(objectTypeName,index).subscribe((data:any)=>

  //   )
  // }


  // UserObjectAdd(data: any, objectTypeName: string) {
  //   this.utilitiesService.UserObjectPush(data, objectTypeName).subscribe((res: any) => {
  //     this.usercontactsData = res;

  //   })
  // }


  OnSaveUserDetail() {
    debugger
    this.userDetail.user = this.users;
    this.userDetail.userAddressDetails = this.useraddressdetailsData;
    this.userDetail.userCompanies = this.usercompanyData;
    this.userDetail.userCourses = this.usercoursesData;
    this.userDetail.userEducationDetails = this.usereducationdetailsData;
    this.userDetail.userEmails = this.useremailsData;
    this.userDetail.userSkills = this.userskillsData;
    this.userDetail.userContacts = this.usercontactsData;
    debugger

    this.usersService.AddUserDetail(this.userDetail).subscribe((res: any) => {
      if (res)
        alert('data saved successfully');
      else
        alert('data not saved');
    })
  }
}

