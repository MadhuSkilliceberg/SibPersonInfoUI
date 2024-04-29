import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { EMPTY } from 'rxjs';
import { JobPost } from 'src/app/Models/CompanyJobPost';
import { EmploymentType } from 'src/app/Models/EmploymentTypw';
import { Location } from 'src/app/Models/Location';
import { DepartmentRoleCategory } from 'src/app/Models/LookUp';
import { LookUpSearch } from 'src/app/Models/LookUpSearch';
import { LookUpValue } from 'src/app/Models/LookUpValues';
import { Roles } from 'src/app/Models/Roles';
import { Skills } from 'src/app/Models/Skills';

import { JobPostService } from 'src/app/services/JobPost/job-post.service';
import { LookUpValueservice } from 'src/app/services/lookup/look-up-values.service';
import { SkillsService } from 'src/app/services/skills/skills.service';

@Component({
  selector: 'app-companyjob',
  templateUrl: './companyjob.component.html',
  styleUrls: ['./companyjob.component.css'],
})
export class CompanyjobComponent implements OnInit {
  private stepper!: Stepper;
  skillSeach!: string;
  //LocationSeach!: string;
  userId: number = 0;
  DepartmentRoleCategoryId:number=0;
  ContinentId!:number;
  CountryId!:number;
  StateId!:number;
  jobpost: JobPost = new JobPost();
  lookUpSearch :LookUpSearch = new LookUpSearch();
  jobpostList: JobPost[] = [];
  LocationData: LookUpValue[] = [];
  AvailableSkills: Skills[] = [];
  MappedSkills: Skills[] = [];
  employmemttypes :EmploymentType[]=[];
  DepartmentRoleCategory:DepartmentRoleCategory[]=[];

  availbleRoles:LookUpValue[]=[];
  MappedRoles:LookUpValue[]=[];
  MappedLocation:LookUpValue[]=[];
  availableLocation:LookUpValue[]=[];

  targetContinent:LookUpValue[]=[];
  targetCountry:LookUpValue[]=[];
  targetState:LookUpValue[]=[];
  targetDistrict:LookUpValue[]=[];

  constructor(
    private jobPostService: JobPostService,
    private lookUpService: LookUpValueservice,
    private skillService: SkillsService
  ) {}

  ngOnInit(): void {
    const stepperElement = document.querySelector('#stepper1');
    if (stepperElement !== null) {
      this.stepper = new Stepper(stepperElement, {
        linear: false,
        animation: true,
      });
    }
    this.GetLocationLookUps();
    this.GetSkills();
    this.GetEmploymentTypeLookUps();
    this.GetDepartmentRoleCategoryLookUps();
    this.GetContinentLookUps();
    this.lookUpSearch.Ids = [8];
  }

  // By using this method we will get the Location
  GetLocationLookUps(): any {
    this.lookUpService
      .GetLookUpValueByCode(['LOCATION_TYPE'])
      .subscribe((res: any) => {
        console.log('responceLocation:', res);
        debugger;
        this.LocationData = res;
      });
  }

  
  // By using this method we will get the EmploymentType
  GetEmploymentTypeLookUps(): any {
    this.lookUpService
      .GetLookUpValueByCode(['EMPLOYMENT_TYPE'])
      .subscribe((res: any) => {
        console.log('responceLocation:', res);
        debugger;
        this.employmemttypes = res;
      });
  }

    // By using this method we will get the DepartmentRoleCategory
    GetDepartmentRoleCategoryLookUps(): any {
      this.lookUpService
        .GetLookUpValueByCode(['DEPARTMENT_ROLE_CATEGORY'])
        .subscribe((res: any) => {
          console.log('responceLocation:', res);
          debugger;
          this.DepartmentRoleCategory = res;
        });
    }


        // By using this method we will get the Location
        GetRoleLookUps(parentId :number): any {
          this.lookUpService
            .GetLookUpValueByCode(['ROLE'])
            .subscribe((res: LookUpValue[]) => {
              console.log('responceLocation:', res);
              debugger;
              this.availbleRoles = res.filter(a=>a.ParentId == parentId) ;
            });
        }

         // By using this method we will get the Continent
         GetContinentLookUps(): any {
          debugger
          this.lookUpService
            .GetLookUpValueByCode(['CONTINET'])
            .subscribe((res: LookUpValue[]) => {
              console.log('responceLocation:', res);
              debugger;
              this.targetContinent = res;
              // this.targetContinent = res.filter(a=>a.ParentId == continentId) ;
            });
        }


         // By using this method we will get the Continent
         GetCountryLookUps(continentId :number): any {
          this.lookUpService
            .GetLookUpValueByCode(['COUNTRY'])
            .subscribe((res: LookUpValue[]) => {
              console.log('responceLocation:', res);
              debugger;
              this.targetCountry = res.filter(a=>a.ParentId == continentId) ;
            });
        }

        // By using this method we will get the Continent
        GetStateLookUps(countryId :number): any {
          this.lookUpService
            .GetLookUpValueByCode(['STATE'])
            .subscribe((res: LookUpValue[]) => {
              console.log('responceLocation:', res);
              debugger;
              this.targetState = res.filter(a=>a.ParentId == countryId) ;
            });
        }
         // By using this method we will get the Continent
         GetDistrictLookUps(stateId :number): any {
          this.lookUpService
            .GetLookUpValueByCode(['DISTRICT'])
            .subscribe((res: LookUpValue[]) => {
              console.log('responceLocation:', res);
              debugger;
              this.targetDistrict = res.filter(a=>a.ParentId == stateId) ;
            });
        }

  
  // By using this method we will get the Location
  GetSkills(): any {
    this.skillService.GetSkills().subscribe((res: any) => {
      console.log('responceLocation:', res);
      debugger;
      this.AvailableSkills = res;
    });
  }


  next() {
    this.stepper.next();
  }
  nextTo(step: number) {
    this.stepper.to(step);
  }

  onSubmit(): any {}
  OnSaveJobDetail(): any {
    debugger;
    console.log('this.jobpost:', this.jobpost);
    this.jobPostService.AddJobPosts(this.jobpost).subscribe((resp: any) => {
      if (resp.status == 200) {
        alert('Job Posted Suscussfully');
      } else {
        alert('Job Not Posted Facing Some Issues re-chick post');
      }
    });
  }

  OnAddSkill(item: Skills, index: number) {
    this.MappedSkills.push(item);
    //remove from AvailableSkills
    // this.AvailableSkills.indexOf(item);
    this.AvailableSkills.splice(index, 1);
  }

  OnRemoveSkill(item: Skills, index: number) {
    this.AvailableSkills.push(item);
    this.MappedSkills.splice(index, 1);
  }

  OnRemoveLocation(item:LookUpValue , index: number){
    this.availableLocation.push(item);
    this.MappedLocation.splice(index, 1);
  }

  
  OnAddLocation(item: LookUpValue, index: number) {
    this.MappedLocation.push(item);
    this.availableLocation.splice(index, 1);
    this.lookUpSearch.Name = '';
  }

  OnAddRole(item: LookUpValue, index: number) {
    this.MappedRoles.push(item);
    //remove from AvailableSkills
    // this.AvailableSkills.indexOf(item);
    this.availbleRoles.splice(index, 1);
  }

  OnRemoveRole(item: LookUpValue, index: number) {
    this.availbleRoles.push(item);
    //remove from MappedSkills
    //this.MappedSkills.indexOf(item);
    this.MappedRoles.splice(index, 1);
  }
   

  // By using this method we will get the Location
  GetSkillsSearch(): any {
    if (this.skillSeach.length > 2) {
      this.skillService
        .GetSkillsSearch(this.skillSeach)
        .subscribe((res: any) => {
          console.log('responceLocation:', res);
          debugger;
          this.AvailableSkills = res;
        });
    }
  }

  GetLookUpSearch(): any {
    debugger
    if (this.lookUpSearch.Name.length > 2) {
      if (this.MappedLocation.length < 3) {
      debugger
      this.lookUpService
        .GetLookUpSearch( this.lookUpSearch)
        .subscribe((res: any) => {
          console.log('responceLocation:', res);
          debugger;
          this.availableLocation = res;
        });
    }
  }
  }

  onDepartmentChange( roleCategoryId :number):any{
    debugger
    this.GetRoleLookUps(roleCategoryId);
    this.MappedRoles=[];


  }

  onContinentChange(continentId:number):any{
    this.GetCountryLookUps(continentId);
  }
  onCountryChange(countryId : number):any{
    this.GetStateLookUps(countryId);

  }
  onStateChange(stateId:number):any{
    this.GetDistrictLookUps(stateId);
  }


 

}
