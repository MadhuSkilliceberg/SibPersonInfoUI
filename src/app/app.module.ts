import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { InstitutionsComponent } from './components/institutions/institutions.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxStarRatingModule } from 'ngx-star-rating';

import { DndModule } from 'ngx-drag-drop';

import { TaskComponent } from './components/task/task.component';
import { TaskCommentDocumentsComponent } from './components/taskcommentdocuments/taskcommentdocuments.component';
import { TaskCommentsComponent } from './components/taskcomments/taskcomments.component';
import { TaskDocumentsComponent } from './components/taskdocuments/taskdocuments.component';
import { TaskLogComponent } from './components/tasklog/tasklog.component';
import { TaskStateComponent } from './components/taskstate/taskstate.component';
import { TemplateComponent } from './components/template/template.component';
import { TemplateTypeComponent } from './components/templatetype/templatetype.component';
import { UserAddressDetailsComponent } from './components/useraddressdetails/useraddressdetails.component';
import { UserCompanyComponent } from './components/usercompany/usercompany.component';
import { UserContactsComponent } from './components/usercontacts/usercontacts.component';
import { UserCoursesComponent } from './components/usercourses/usercourses.component';
import { UserEducationDetailsComponent } from './components/usereducationdetails/usereducationdetails.component';
import { UserEmailsComponent } from './components/useremails/useremails.component';
import { UsersComponent } from './components/users/users.component';
import { UserSkillsComponent } from './components/userskills/userskills.component';
import { UserTypesComponent } from './components/usertypes/usertypes.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { VacanciesSkillComponent } from './components/vacanciesskill/vacanciesskill.component';
import { YearSemesterComponent } from './components/yearsemester/yearsemester.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyAddressComponent } from './components/companyaddress/companyaddress.component';
import { CompanyContactsComponent } from './components/companycontacts/companycontacts.component';
import { CompanyEmailsComponent } from './components/companyemails/companyemails.component';
import { CompanyReviewsComponent } from './components/companyreviews/companyreviews.component';
import { ContactTypeComponent } from './components/contacttype/contacttype.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseYearComponent } from './components/courseyear/courseyear.component';
import { CoutryStatesComponent } from './components/coutrystates/coutrystates.component';
import { CYearsComponent } from './components/cyears/cyears.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DesignationComponent } from './components/designation/designation.component';
import { EmploymentTypesComponent } from './components/employmenttypes/employmenttypes.component';
import { FamilyComponent } from './components/family/family.component';
import { FamilyContactsComponent } from './components/familycontacts/familycontacts.component';
import { FamilyEducationDetailsComponent } from './components/familyeducationdetails/familyeducationdetails.component';
import { FamilyEmailsComponent } from './components/familyemails/familyemails.component';
import { GenderComponent } from './components/gender/gender.component';
import { IndustryTypesComponent } from './components/industrytypes/industrytypes.component';
import { InstitutionAddressComponent } from './components/institutionaddress/institutionaddress.component';
import { InstitutionContactsComponent } from './components/institutioncontacts/institutioncontacts.component';
import { InstitutionCoursesComponent } from './components/institutioncourses/institutioncourses.component';
import { InstitutionEmailsComponent } from './components/institutionemails/institutionemails.component';
import { InstitutionsComponent } from './components/institutions/institutions.component';
import { MarritalStatusComponent } from './components/marritalstatus/marritalstatus.component';
import { MediumComponent } from './components/medium/medium.component';
import { MenuComponent } from './components/menu/menu.component';
import { Menu_ListComponent } from './components/menu_list/menu_list.component';
import { QulificationTypeComponent } from './components/qulificationtype/qulificationtype.component';
import { RelationTypesComponent } from './components/relationtypes/relationtypes.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { RoleCategoryComponent } from './components/rolecategory/rolecategory.component';
import { RolesComponent } from './components/roles/roles.component';
import { SemestersComponent } from './components/semesters/semesters.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SprintComponent } from './components/sprint/sprint.component';
import { SprintTasksComponent } from './components/sprinttasks/sprinttasks.component';
import { StatesComponent } from './components/states/states.component';
import { StatusComponent } from './components/status/status.component';
import { UserSkillEditComponent } from './components/userskills/user-skill-edit/user-skill-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UseRegistrationComponent } from './components/use-registration/use-registration.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { CompanyRegistrationComponent } from './components/company-registration/company-registration.component';
import { CategoryComponent } from './components/category/category.component';
import { TreenodeComponent } from './utilities/treenode/treenode.component';
import { InstitutionRegComponent } from './components/institiutionDetails/institution-reg/institution-reg.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CommonModule } from '@angular/common';


export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}

@NgModule({
  declarations: [
    AppComponent,

    TaskComponent,
    TaskCommentDocumentsComponent,
    TaskCommentsComponent,
    TaskDocumentsComponent,
    TaskLogComponent,
    TaskStateComponent,
    TemplateComponent,
    TemplateTypeComponent,
    UserAddressDetailsComponent,
    UserCompanyComponent,
    UserContactsComponent,
    UserCoursesComponent,
    UserEducationDetailsComponent,
    UserEmailsComponent,
    UsersComponent,
    UserSkillsComponent,
    UserTypesComponent,
    VacanciesComponent,
    VacanciesSkillComponent,
    YearSemesterComponent,
    CompanyComponent,
    CompanyAddressComponent,
    CompanyContactsComponent,
    CompanyEmailsComponent,
    CompanyReviewsComponent,
    ContactTypeComponent,
    CountriesComponent,
    CoursesComponent,
    CourseYearComponent,
    CoutryStatesComponent,
    CYearsComponent,
    DepartmentsComponent,
    DesignationComponent,
    EmploymentTypesComponent,
    FamilyComponent,
    FamilyContactsComponent,
    FamilyEducationDetailsComponent,
    FamilyEmailsComponent,
    GenderComponent,
    IndustryTypesComponent,
    InstitutionAddressComponent,
    InstitutionContactsComponent,
    InstitutionCoursesComponent,
    InstitutionEmailsComponent,
    InstitutionsComponent,
    MarritalStatusComponent,
    MediumComponent,
    MenuComponent,
    Menu_ListComponent,
    QulificationTypeComponent,
    RelationTypesComponent,
    ReviewsComponent,
    RoleCategoryComponent,
    RolesComponent,
    SemestersComponent,
    SkillsComponent,
    SprintComponent,
    SprintTasksComponent,
    StatesComponent,
    StatusComponent,
    UserSkillEditComponent,
    LoginComponent,
    UseRegistrationComponent,
    UserRegistrationComponent,
    CompanyRegistrationComponent,
    CategoryComponent,
    TreenodeComponent,
    InstitutionRegComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule, NgxStarRatingModule,
    DndModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001","localhost:44384"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [
    AuthGuard,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
