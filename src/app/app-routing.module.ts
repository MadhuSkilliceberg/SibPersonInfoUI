import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { InstitutionsComponent } from './components/institutions/institutions.component';

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
import { LoginComponent } from './login/login.component';
import { UseRegistrationComponent } from './components/use-registration/use-registration.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { CompanyRegistrationComponent } from './components/company-registration/company-registration.component';
import { CategoryComponent } from './components/category/category.component';


const routes: Routes = [

  { path: 'reg', component: UseRegistrationComponent },
  { path: 'reg/:id', component: UseRegistrationComponent },
  { path: 'user-reg', component: UserRegistrationComponent },
  { path: 'ueser-reg/:id', component: UserRegistrationComponent },
  { path: 'task', component: TaskComponent },
  { path: 'taskcommentdocuments', component: TaskCommentDocumentsComponent },
  { path: 'taskcomments', component: TaskCommentsComponent },
  { path: 'taskdocuments', component: TaskDocumentsComponent },
  { path: 'tasklog', component: TaskLogComponent },
  { path: 'taskstate', component: TaskStateComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'templatetype', component: TemplateTypeComponent },
  { path: 'useraddressdetails', component: UserAddressDetailsComponent },
  { path: 'usercompany', component: UserCompanyComponent },
  { path: 'usercontacts', component: UserContactsComponent },
  { path: 'usercourses', component: UserCoursesComponent },
  { path: 'usereducationdetails', component: UserEducationDetailsComponent },
  { path: 'useremails/:id', component: UserEmailsComponent },
  { path: 'useremails', component: UserEmailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'userskills', component: UserSkillsComponent },
  { path: 'usertypes', component: UserTypesComponent },
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'vacanciesskill', component: VacanciesSkillComponent },
  { path: 'yearsemester', component: YearSemesterComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'companyaddress', component: CompanyAddressComponent },
  { path: 'companycontacts', component: CompanyContactsComponent },
  { path: 'companyemails', component: CompanyEmailsComponent },
  { path: 'companyreviews', component: CompanyReviewsComponent },
  { path: 'contacttype', component: ContactTypeComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courseyear', component: CourseYearComponent },
  { path: 'coutrystates', component: CoutryStatesComponent },
  { path: 'cyears', component: CYearsComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'designation', component: DesignationComponent },
  { path: 'employmenttypes', component: EmploymentTypesComponent },
  { path: 'family', component: FamilyComponent },
  { path: 'familycontacts', component: FamilyContactsComponent },
  { path: 'familyeducationdetails', component: FamilyEducationDetailsComponent },
  { path: 'familyemails', component: FamilyEmailsComponent },
  { path: 'gender', component: GenderComponent },
  { path: 'industrytypes', component: IndustryTypesComponent },
  { path: 'institutionaddress', component: InstitutionAddressComponent },
  { path: 'institutioncontacts', component: InstitutionContactsComponent },
  { path: 'institutioncourses', component: InstitutionCoursesComponent },
  { path: 'institutionemails', component: InstitutionEmailsComponent },
  { path: 'institutions', component: InstitutionsComponent },
  { path: 'marritalstatus', component: MarritalStatusComponent },
  { path: 'medium', component: MediumComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu_list', component: Menu_ListComponent },
  { path: 'qulificationtype', component: QulificationTypeComponent },
  { path: 'relationtypes', component: RelationTypesComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'rolecategory', component: RoleCategoryComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'semesters', component: SemestersComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'sprint', component: SprintComponent },
  { path: 'sprinttasks', component: SprintTasksComponent },
  { path: 'states', component: StatesComponent },
  { path: 'status', component: StatusComponent },

  { path: 'userskilladd', component: UserSkillEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'companyRegistration', component: CompanyRegistrationComponent },
  { path: 'Category', component: CategoryComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
