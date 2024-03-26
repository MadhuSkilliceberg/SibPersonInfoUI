
import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';


import { UserDetail, UserModel, Users } from 'src/app/Models/Users';
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
import { UsersService } from 'src/app/services/users/users.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {
  [x: string]: any;

  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;
  isUserEducationExist: boolean = false;

  isSkillSave: boolean = true;
  isCompanySave: boolean = true;



  user: Users = new Users();
  usersData: Users[] = [];
  usersId: number = 0;

  genderData: Gender[] = [];
  marritalstatusData: MarritalStatus[] = [];
  userTypes: UserTypes[] = []

  userSkill: UserSkills = new UserSkills();
  userSkillsData: UserSkills[] = []

  skillsData: Skills[] = [];

  userEducationDetails: UserEducationDetails = new UserEducationDetails();
  userEducationDetailsData: UserEducationDetails[] = []

  qulificationtypeData: QulificationType[] = []
  institutionsData: Institutions[] = []

  userContacts: UserContacts = new UserContacts();
  userContactsData: UserContacts[] = []
  userContactsId: number = 0;
  contacttypeData: ContactType[] = []

  userEmail: UserEmails = new UserEmails();
  userEmailsData: UserEmails[] = []
  userEmailsId: number = 0;

  userAddressDetails: UserAddressDetails = new UserAddressDetails();
  userAddressDetailsData: UserAddressDetails[] = []
  statesData: States[] = []
  countriesData: Countries[] = []

  userCourses: UserCourses = new UserCourses();
  userCoursesData: UserCourses[] = []
  coursesData: Courses[] = []

  userCompany: UserCompany = new UserCompany();
  userCompanies: UserCompany[] = []


  companyData: Company[] = []
  designationData: Designation[] = []
  userType: UserTypes = new UserTypes();

  userModel: UserModel = new UserModel();
  userDetail: UserDetail = new UserDetail();

  userId: number = 0;
  private stepper!: Stepper;
  constructor(
    private usersService: UsersService,
    private genderService: GenderService,
    private marritalstatusService: MarritalStatusService,
    private usertypesService: UserTypesService,
    private userSkillsService: UserSkillsService,
    private skillsService: SkillsService,
    private userEducationDetailsService: UserEducationDetailsService,
    private qulificationtypeService: QulificationTypeService,
    private institutionsService: InstitutionsService,
    private userContactsService: UserContactsService,
    private contacttypeService: ContactTypeService,
    private userEmailsService: UserEmailsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userAddressDetailsService: UserAddressDetailsService,
    private statesService: StatesService,
    private countriesService: CountriesService,
    private userCoursesService: UserCoursesService,
    private coursesService: CoursesService,
    private userCompanyService: UserCompanyService,
    private companyService: CompanyService,
    private designationService: DesignationService,
    private utilitiesService: UtilitiesService,
    private route:ActivatedRoute
  ) {
    
  }

  ngOnInit(): any {
    this.route.paramMap.subscribe((params) => {
      this.userId = Number(params.get('id'));
      this.GetUserAllData(this.userId);
    });
    this.userDetail.User = new Users();
    const stepperElement = document.querySelector('#stepper1');
    if (stepperElement !== null) {
      this.stepper = new Stepper(stepperElement, {
        linear: false,
        animation: true
      })
    }
    this.initialsetting();
    //this.GetUsersById(2);
    this.GetGender();
    this.GetMarritalStatus();
    this.GetUserTypes();
    this.GetUserEducationDetails();
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
   
  }


  initialsetting() {

    debugger
    this.userDetail.UserContacts.push(new UserContacts());
    this.userDetail.UserAddressDetails.push(new UserAddressDetails());
    this.userDetail.UserCompanies.push(new UserCompany());
    this.userDetail.UserCourses.push(new UserCourses());
    this.userDetail.UserEducationDetails.push(new UserEducationDetails());
    this.userDetail.UserEmails.push(new UserEmails());
    this.userDetail.UserSkills.push(new UserSkills());

    // this.userContactsData.push(new UserContacts());
    // this.userAddressDetailsData.push(new UserAddressDetails());
    // this.userCompanies.push(new UserCompany());
    // this.userCoursesData.push(new UserCourses());
    // this.userEducationDetailsData.push(new UserEducationDetails());
    // this.userEmailsData.push(new UserEmails());
    // this.userSkillsData.push(new UserSkills());
    //this.usertypesData.push(new UserTypes());

    this.user.UserTypeId = 1;
    this.user.GenderId = 1;
  }

  // By using this method we will get the Users based on the Id
  GetUsersById(Id: number): any {
    this.usersService.GetUsersById(Id).subscribe((res: any) => {
      this.user = res;
      //   this.userAddressDetailsData=this.user.


    })
  }

  // By using this method we will get the Users based on the Id
  GetUserAllData(Id: number): any {
    this.usersService.GetUserAllData(Id).subscribe((res: any) => {
      this.userDetail = res;
      this.userId = this.userDetail.User.Id;
      this.initialsetting();
      debugger
      //  this.userAddressDetailsData=this.user.
    })
  }

  // By uing this method we will Add the Users based on Users
  AddUsers(): any {
    this.usersService.AddUsers(this.user).subscribe((res: any) => {
      this.GetUsersById(res);
      // this.user = new Users();
    })
  }

  // By uing this method we will Update the Users based on Users
  UpdateUser(): any {
    this.usersService.UpdateUser(this.user).subscribe((res: any) => {
      this.GetUsersById(res);
      // this.user = new Users();
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
      this.marritalstatusData = res
    })
  }

  // By using this method we will get the UserTypes 
  GetUserTypes(): any {
    this.usertypesService.GetUserTypes().subscribe((res: any) => {
      debugger
      this.userTypes = res;
      
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
    this.userSkillsService.GetUserSkills().subscribe((res: any) => {
      this.userSkillsData = res;

    })
  }

  // By using this method we will get the UserSkills based on the Id
  GetUserSkillsById(Id: number): any {
    this.userSkillsService.GetUserSkillsById(Id).subscribe((res: any) => {
      this.userSkill = res;

    })
  }

  // By uing this method we will Add the UserSkills based on UserSkills
  AddUserSkills(): any {
    this.userSkillsService.AddUserSkills(this.userSkill).subscribe((res: any) => {
      this.GetUserSkills();
      this.userSkill = new UserSkills();
    })
  }

  // By uing this method we will Update the UserSkills based on UserSkills
  UpdateUserSkills(): any {
    this.userSkillsService.UpdateUserSkills(this.userSkill).subscribe((res: any) => {
      this.GetUserSkills();
      this.userSkill = new UserSkills();

    })
  }

  // By using this method we will delete the UserSkills based on the Id
  DeleteUserSkills(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.userSkillsService.DeleteUserSkills(Id).subscribe((res: any) => {
        this.GetUserSkills();
        this.userSkill = new UserSkills();
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
    this.userEducationDetailsService.GetUserEducationDetails().subscribe((res: any) => {
      this.userEducationDetailsData = res;
    })
  }

  // By using this method we will get the UserEducationDetails based on the Id
  GetUserEducationDetailsById(Id: number): any {
    this.userEducationDetailsService.GetUserEducationDetailsById(Id).subscribe((res: any) => {
      this.userEducationDetails = res;
      this.isUserEducationExist = true;
    })
  }

  // By uing this method we will Add the UserEducationDetails based on UserEducationDetails
  AddUserEducationDetails(): any {
    this.userEducationDetailsService.AddUserEducationDetail(this.userEducationDetails).subscribe((res: any) => {
      this.GetUserEducationDetails();
      this.userEducationDetails = new UserEducationDetails();
    })
  }

  // By uing this method we will Update the UserEducationDetails based on UserEducationDetails
  UpdateUserEducationDetails(): any {
    this.userEducationDetailsService.UpdateUserEducationDetail(this.userEducationDetails).subscribe((res: any) => {
      this.GetUserEducationDetails();
      this.userEducationDetails = new UserEducationDetails();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

  AddOrUpdateUserAddressDetails(): any {
    this.userAddressDetailsService.AddOrUpdateUserAddressDetails(this.userAddressDetailsData).subscribe((res: any) => {
      this.GetUserEducationDetails();
      this.userEducationDetails = new UserEducationDetails();
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
    this.userContactsService.GetUserContacts().subscribe((res: any) => {
      this.userContactsData = res;
    })
  }

  // By using this method we will get the UserContacts based on the Id
  GetUserContactsById(Id: number): any {
    this.userContactsService.GetUserContactsById(Id).subscribe((res: any) => {
      this.userContacts = res;
    })
  }

  // By uing this method we will Add the UserContacts based on UserContacts
  AddUserContacts(): any {
    this.userContactsService.AddUserContacts(this.userContacts).subscribe((res: any) => {
      this.GetUserContacts();
      this.userContacts = new UserContacts();
    })
  }

  // By uing this method we will Update the UserContacts based on UserContacts
  UpdateUserContacts(): any {
    this.userContactsService.UpdateUserContacts(this.userContacts).subscribe((res: any) => {
      this.GetUserContacts();
      this.userContacts = new UserContacts();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

  // By using this method we will delete the UserContacts based on the Id
  DeleteUserContacts(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.userContactsService.DeleteUserContacts(Id).subscribe((res: any) => {
        this.GetUserContacts();
        this.userContacts = new UserContacts();
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
    this.userEmailsService.GetUserEmails().subscribe((res: any) => {
      this.userEmailsData = res;
    })
  }

  // By using this method we will get the UserEmails based on the Id
  GetUserEmailsById(Id: number): any {
    this.userEmailsService.GetUserEmailsById(Id).subscribe((res: any) => {
      this.userEmail = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserEmails based on UserEmails
  AddUserEmails(): any {
    this.userEmailsService.AddUserEmail(this.userEmail).subscribe((res: any) => {
      this.GetUserEmails();
      this.userEmail = new UserEmails();
    })
  }

  // By uing this method we will Update the UserEmails based on UserEmails
  UpdateUserEmails(): any {
    this.userEmailsService.UpdateUserEmail(this.userEmail).subscribe((res: any) => {
      this.GetUserEmails();
      this.userEmail = new UserEmails();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

  // By using this method we will delete the UserEmails based on the Id
  DeleteUserEmails(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.userEmailsService.DeleteUserEmails(Id).subscribe((res: any) => {
        this.GetUserEmails();
        this.userEmail = new UserEmails();
      })
    }
  }

  // By using this method we will get the UserAddressDetails 
  GetUserAddressDetails(): any {
    this.userAddressDetailsService.GetUserAddressDetails().subscribe((res: any) => {
      this.userAddressDetailsData = res;
    })
  }

  // By using this method we will get the UserAddressDetails based on the Id
  GetUserAddressDetailsById(Id: number): any {
    this.userAddressDetailsService.GetUserAddressDetailsById(Id).subscribe((res: any) => {
      this.userAddressDetails = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserAddressDetails based on UserAddressDetails
  AddUserAddressDetails(): any {
    this.userAddressDetailsService.AddUserAddressDetails(this.userAddressDetails).subscribe((res: any) => {
      this.GetUserAddressDetails();
      this.userAddressDetails = new UserAddressDetails();
    })
  }

  // By uing this method we will Update the UserAddressDetails based on UserAddressDetails
  UpdateUserAddressDetails(): any {
    this.userAddressDetailsService.UpdateUserAddressDetails(this.userAddressDetails).subscribe((res: any) => {
      this.GetUserAddressDetails();
      this.userAddressDetails = new UserAddressDetails();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

  // By using this method we will delete the UserAddressDetails based on the Id
  DeleteUserAddressDetails(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.userAddressDetailsService.DeleteUserAddressDetails(Id).subscribe((res: any) => {
        this.GetUserAddressDetails();
        this.userAddressDetails = new UserAddressDetails();
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
    this.userCoursesService.GetUserCourses().subscribe((res: any) => {
      this.userCoursesData = res;
      this.userCoursesData.push(new UserCourses());
    })
  }

  // By using this method we will get the UserCourses based on the Id
  GetUserCoursesById(Id: number): any {
    this.userCoursesService.GetUserCoursesById(Id).subscribe((res: any) => {
      this.userCourses = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the UserCourses based on UserCourses
  AddUserCourses(): any {
    this.userCoursesService.AddUserCourses(this.userCourses).subscribe((res: any) => {
      this.GetUserCourses();
      this.userCourses = new UserCourses();
    })
  }

  // By uing this method we will Update the UserCourses based on UserCourses
  UpdateUserCourses(): any {
    this.userCoursesService.UpdateUserCourses(this.userCourses).subscribe((res: any) => {
      this.GetUserCourses();
      this.userCourses = new UserCourses();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

  // By using this method we will delete the UserCourses based on the Id
  DeleteUserCourses(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.userCoursesService.DeleteUserCourses(Id).subscribe((res: any) => {
        this.GetUserCourses();
        this.userCourses = new UserCourses();
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
    this.userCompanyService.GetUserCompanies().subscribe((res: any) => {
      this.userCompanies = res;
    })
  }

  // By using this method we will get the UserCompany based on the Id
  GetUserCompanyById(Id: number): any {
    this.userCompanyService.GetUserCompanyById(Id).subscribe((res: any) => {
      this.userCompany = res;
    })
  }

  // By uing this method we will Add the UserCompany based on UserCompany
  AddUserCompany(): any {
    this.userCompanyService.AddUserCompany(this.userCompany).subscribe((res: any) => {
      this.GetUserCompany();
      this.userCompany = new UserCompany();
    })
  }

  // By uing this method we will Update the UserCompany based on UserCompany
  UpdateUserCompany(): any {
    this.userCompanyService.UpdateUserCompany(this.userCompany).subscribe((res: any) => {
      this.GetUserCompany();
      this.userCompany = new UserCompany();
    })
  }

  // By using this method we will delete the UserCompany based on the Id
  DeleteUserCompany(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.userCompanyService.DeleteUserCompany(Id).subscribe((res: any) => {
        this.GetUserCompany();
        this.userCompany = new UserCompany();
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
  OnSaveUser() {
    this.userModel.user = this.user;
    // this.userAddressDetails.CountryId = Number(this.userAddressDetails.CountryId);
    // this.userAddressDetails.StateId = Number(this.userAddressDetails.StateId);
    this.userModel.userAddressDetails = this.userAddressDetails;
    this.userModel.userCompany = this.userCompany;
    this.userModel.userCourses = this.userCourses;
    this.userModel.userEducationDetails = this.userEducationDetails;
    this.userModel.userEmails = this.userEmail;
    this.userModel.userSkills = this.userSkill;
    this.userModel.userTypes = this.userType;
    this.userModel.userContacts = this.userContacts;


    this.usersService.AddUserModel(this.userModel).subscribe((res: any) => {
      if (res)
        alert('data saved successfully');
      else
        alert('data not saved');
    })
  }


  // UserObjectPush(objectTypeName: string) {

  //   if (objectTypeName != null && objectTypeName != undefined && objectTypeName.length != 0) {
  //     switch (objectTypeName) {
  //       case 'UserContacts':
  //         this.userContactsData.push(new UserContacts());
  //         break;
  //       case 'UserAddressDetails':
  //         this.userAddressDetailsData.push(new UserAddressDetails());
  //         break;
  //       case 'UserCompany':
  //         this.userCompanies.push(new UserCompany());
  //         break;
  //       case 'UserCourses':
  //         this.userCoursesData.push(new UserCourses());
  //         break;
  //       case 'UserEducationDetails':
  //         this.userEducationDetailsData.push(new UserEducationDetails());
  //         break;
  //       case 'UserEmails':
  //         this.userEmailsData.push(new UserEmails());
  //         break;
  //       case 'UserSkills':
  //         this.userSkillsData.push(new UserSkills());
  //         break;
  //       // case 'UserTypes':
  //       //   this.usertypesData.push(new UserTypes());
  //       // break;
  //       default:
  //         console.log("No such object exists!");
  //         break;
  //     }
  //   }
  // }

  UserObjectPush(objectTypeName: string) {

    if (objectTypeName != null && objectTypeName != undefined && objectTypeName.length != 0) {
      switch (objectTypeName) {
        
        case 'UserContacts':
          this.userDetail.UserContacts.push(new UserContacts());
          debugger;
          break;
        case 'UserAddressDetails':
          this.userDetail.UserAddressDetails.push(new UserAddressDetails());
          break;
        case 'UserCompany':
          this.userDetail.UserCompanies.push(new UserCompany());
          break;
        case 'UserCourses':
          this.userDetail.UserCourses.push(new UserCourses());
          break;
        case 'UserEducationDetails':
          this.userDetail.UserEducationDetails.push(new UserEducationDetails());
          break;
        case 'UserEmails':
          this.userDetail.UserEmails.push(new UserEmails());
          break;
        case 'UserSkills':
          this.userDetail.UserSkills.push(new UserSkills());
          break;
        // case 'UserTypes':
        //   this.usertypesData.push(new UserTypes());
        // break;
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
  //     this.userContactsData = res;

  //   })
  // }


  OnSaveUserDetail() {
    // this.userDetail.User = this.user;
    // this.userDetail.UserAddressDetails = this.userAddressDetailsData;
    // this.userDetail.UserCompanies = this.userCompanies;
    // this.userDetail.UserCourses = this.userCoursesData;
    // this.userDetail.UserEducationDetails = this.userEducationDetailsData;
    // this.userDetail.UserEmails = this.userEmailsData;
    // this.userDetail.UserSkills = this.userSkillsData;
    // this.userDetail.UserContacts = this.userContactsData;

    this.usersService.AddUserDetail(this.userDetail).subscribe((res: any) => {
      if (res) {
        this.stepper.next();
        this.GetUserAllData(this.userDetail.User.Id);
        alert('data saved successfully');
      }
      else
        alert('data not saved');
    })
  }

  onSubmit() {

  }


  next() {
    this.stepper.next();
  }

  nextTo(step: number) {
    this.stepper.to(step);
  }
}

