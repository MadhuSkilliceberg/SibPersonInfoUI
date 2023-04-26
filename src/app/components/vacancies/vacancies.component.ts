import { Component, OnInit } from '@angular/core';
import { Vacancies } from 'src/app/Models/Vacancies';
import { VacanciesService } from './../../services/vacancies/vacancies.service'
import { Company } from 'src/app/Models/Company';
import { CompanyService } from 'src/app/services/company/company.service';
import { StatusService } from 'src/app/services/status/status.service';
import { Status } from 'src/app/Models/Status';
import { Roles } from 'src/app/Models/Roles';
import { RolesService } from 'src/app/services/roles/roles.service';
import { IndustryTypes } from 'src/app/Models/IndustryTypes';
import { IndustryTypesService } from 'src/app/services/industrytypes/industrytypes.service';
import { Departments } from 'src/app/Models/Departments';
import { DepartmentsService } from 'src/app/services/departments/departments.service';
import { EmploymentTypes } from 'src/app/Models/EmploymentTypes';
import { EmploymentTypesService } from 'src/app/services/employmenttypes/employmenttypes.service';
import { RoleCategory } from 'src/app/Models/RoleCategory';
import { RoleCategoryService } from 'src/app/services/rolecategory/rolecategory.service';


@Component({
  selector: 'app-Vacancies',
  templateUrl: './Vacancies.component.html',
  styleUrls: ['./Vacancies.component.css']
})
export class VacanciesComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  vacancies: Vacancies = new Vacancies();
  vacanciesData: Vacancies[] = []
  vacanciesId: number = 0;

  companyData: Company[] = []
  statusData: Status[] = []
   rolesData: Roles[] = []
  industrytypesData: IndustryTypes[] = []
  departmentsData: Departments[] = []
  employmenttypesData: EmploymentTypes[] = []
  rolecategoryData: RoleCategory[] = []




  constructor(
    private vacanciesService: VacanciesService,
    private companyService: CompanyService,
    private statusService: StatusService,
    private rolesService: RolesService,
    private industrytypesService: IndustryTypesService,
    private departmentsService: DepartmentsService,
    private employmenttypesService: EmploymentTypesService,
    private rolecategoryService: RoleCategoryService,



  ) { }

  ngOnInit(): any {
    this.GetVacancies();
    this. GetCompany();
    this.GetStatus();
    this.GetRoles();
    this.GetIndustryTypes();
    this.GetDepartments();
    this.GetEmploymentTypes();
    this.GetRoleCategory();
  }

  // By using this method we will get the Vacancies 
  GetVacancies(): any {
    this.vacanciesService.GetVacancies().subscribe((res: any) => {
      this.vacanciesData = res;

    })
  }

  // By using this method we will get the Vacancies based on the Id
  GetVacanciesById(Id: number): any {
    this.vacanciesService.GetVacanciesById(Id).subscribe((res: any) => {
      this.vacancies = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Vacancies based on Vacancies
  AddVacancies(): any {
    this.vacanciesService.AddVacancies(this.vacancies).subscribe((res: any) => {
      this.GetVacancies();
      this.vacancies = new Vacancies();
    })
  }

   // By uing this method we will Update the Vacancies based on Vacancies
  UpdateVacancies(): any {
    this.vacanciesService.UpdateVacancies(this.vacancies).subscribe((res: any) => {
      this.GetVacancies();
      this.vacancies = new Vacancies();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Vacancies based on the Id
  DeleteVacancies(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.vacanciesService.DeleteVacancies(Id).subscribe((res: any) => {
        this.GetVacancies();
        this.vacancies = new Vacancies();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetVacancies();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetVacancies();
  }

    // By using this method we will get the Company 
    GetCompany(): any {
      this.companyService.GetCompany().subscribe((res: any) => {
        this.companyData = res;
  
      })
    }

   // By using this method we will get the Status 
   GetStatus(): any {
    this.statusService.GetStatus().subscribe((res: any) => {
      this.statusData = res;

    })
  }

    // By using this method we will get the Roles 
    GetRoles(): any {
      this.rolesService.GetRoles().subscribe((res: any) => {
        this.rolesData = res;
  
      })
    }

      // By using this method we will get the IndustryTypes 
  GetIndustryTypes(): any {
    this.industrytypesService.GetIndustryTypes().subscribe((res: any) => {
      this.industrytypesData = res;

    })
  }

    // By using this method we will get the Departments 
    GetDepartments(): any {
      this.departmentsService.GetDepartments().subscribe((res: any) => {
        this.departmentsData = res;
  
      })
    }

       // By using this method we will get the EmploymentTypes 
       GetEmploymentTypes(): any {
        this.employmenttypesService.GetEmploymentTypes().subscribe((res: any) => {
        this.employmenttypesData = res;

    })
  }
    // By using this method we will get the RoleCategory 
    GetRoleCategory(): any {
      this.rolecategoryService.GetRoleCategory().subscribe((res: any) => {
        this.rolecategoryData = res;
  
      })
    }

    
}

