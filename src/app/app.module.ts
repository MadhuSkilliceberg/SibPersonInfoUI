import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { InstitutionsComponent } from './components/institutions/institutions.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
//import { NgxStarRatingModule } from 'ngx-star-rating';

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
import { QuestionComponent } from './components/question/question.component';
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
// import { UseRegistrationComponent } from './components/use-registration/use-registration.component';
// import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { CompanyRegistrationComponent } from './components/company-registration/company-registration.component';
import { CategoryComponent } from './components/category/category.component';
import { TreenodeComponent } from './utilities/treenode/treenode.component';
import { InstitutionRegComponent } from './components/institiutionDetails/institution-reg/institution-reg.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CommonModule } from '@angular/common';

import { ReviewsPortalComponent } from './components/reviews-portal/reviews-portal.component';
import { ReviewsPortal1Component } from './components/reviews-portal1/reviews-portal1.component';
import { ReviewsPortal2Component } from './components/reviews-portal2/reviews-portal2.component';
import { ReviewsPortal3Component } from './components/reviews-portal3/reviews-portal3.component';
import { OnlineExamComponent } from './components/exam/online-exam/online-exam.component';
import { JobPostComponent } from './components/jobs/job-post/job-post.component';
import { JobsComponent } from './components/jobs/jobs/jobs.component';
import { UserRegComponent } from './components/user-registration/user-reg/user-reg.component';
import { SocialProfileComponent } from './components/timeline/social-profile/social-profile.component';
import { ChatComponent } from './components/timeline/chat/chat.component';
import { InfoComponent } from './components/timeline/info/info.component';
import { ManageAddressesComponent } from './components/timeline/manage-addresses/manage-addresses.component';
import { CandidatesListingComponent } from './components/timeline/candidates-listing/candidates-listing.component';
import { ProfileProjectsComponent } from './components/projects/profile-projects/profile-projects.component';
import { ProfileTaskTeamComponent } from './components/projects/profile-task-team/profile-task-team.component';
import { ProfileWithTeamSectionComponent } from './components/projects/profile-with-team-section/profile-with-team-section.component';
import { TaskBoardPageComponent } from './components/projects/task-board-page/task-board-page.component';
import { ProfileContactsComponent } from './components/timeline/profile-contacts/profile-contacts.component';
import { ProfileContentComponent } from './components/timeline/profile-content/profile-content.component';
import { SocialAboutComponent } from './components/timeline/social-about/social-about.component';
import { AboutMeProfileComponent } from './components/timeline/about-me-profile/about-me-profile.component';
import { ProfileWithInfoSkillsAndFriendsComponent } from './components/timeline/profile-with-info-skills-and-friends/profile-with-info-skills-and-friends.component';
import { DriveFilesDocumentsUserProfileComponent } from './components/timeline/drive-files-documents-user-profile/drive-files-documents-user-profile.component';
import { ProfilePageWithActivitiesComponent } from './components/timeline/profile-page-with-activities/profile-page-with-activities.component';
import { WorksUserProfileComponent } from './components/timeline/works-user-profile/works-user-profile.component';
import { SocialFriendsComponent } from './components/timeline/social-friends/social-friends.component';
import { ChatAppComponent } from './components/timeline/chat-app/chat-app.component';
import { ColorChatComponent } from './components/timeline/color-chat/color-chat.component';
import { SimpleChatAppComponent } from './components/timeline/simple-chat-app/simple-chat-app.component';
import { WhiteChatComponent } from './components/timeline/white-chat/white-chat.component';
import { MessagesLikeMaterialDesignComponent } from './components/timeline/messages-like-material-design/messages-like-material-design.component';
import { FacebookMessengerChatComponent } from './components/timeline/facebook-messenger-chat/facebook-messenger-chat.component';
import { EventSchedulesWithTabsComponent } from './components/events/event-schedules-with-tabs/event-schedules-with-tabs.component';
import { OwlCarouselEventsComponent } from './components/events/owl-carousel-events/owl-carousel-events.component';
import { ProfileWithMessagesAndEditComponent } from './components/timeline/profile-with-messages-and-edit/profile-with-messages-and-edit.component';
import { ProfileWithDataAndSkillsComponent } from './components/timeline/profile-with-data-and-skills/profile-with-data-and-skills.component';
import { ProfileEditDataAndSkillsComponent } from './components/timeline/profile-edit-data-and-skills/profile-edit-data-and-skills.component';
import { UserProfileWithTimelinePhotosAndSettingComponent } from './components/timeline/user-profile-with-timeline-photos-and-setting/user-profile-with-timeline-photos-and-setting.component';
import { UserProfileWithTabsComponent } from './components/timeline/user-profile-with-tabs/user-profile-with-tabs.component';
import { ProfileAboutInfoComponent } from './components/profile/profile-about-info/profile-about-info.component';
import { ProfileWithTimelinePostsComponent } from './components/profile/profile-with-timeline-posts/profile-with-timeline-posts.component';
import { ProfileAboutComponent } from './components/profile/profile-about/profile-about.component';
import { ProfilePhotosComponent } from './components/profile/profile-photos/profile-photos.component';
import { ProfileVideosComponent } from './components/profile/profile-videos/profile-videos.component';
import { ProfileFriendListComponent } from './components/profile/profile-friend-list/profile-friend-list.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { SupportTicketsComponent } from './components/project/support-tickets/support-tickets.component';
import { ShopUserProfileWithTicketComponent } from './components/project/shop-user-profile-with-ticket/shop-user-profile-with-ticket.component';
import { ProfileWithTimelineComponent } from './components/profile/profile-with-timeline/profile-with-timeline.component';
import { ProfileFollowersPageComponent } from './components/profile/profile-followers-page/profile-followers-page.component';
import { UserCardTaskListComponent } from './components/profile/user-card-task-list/user-card-task-list.component';
import { Bs4TimelineComponent } from './components/timeline/bs4-timeline/bs4-timeline.component';
import { Bs4ProjectListComponent } from './components/project/bs4-project-list/bs4-project-list.component';
import { TicketsForEventsComponent } from './components/project/tickets-for-events/tickets-for-events.component';
import { PaqPageComponent } from './components/project/paq-page/paq-page.component';
import { CompanyProfileComponent } from './components/company/company-profile/company-profile.component';
import { CompanyProfileAboutComponent } from './components/company/company-profile-about/company-profile-about.component';
import { CompanyProfilePhotosComponent } from './components/company/company-profile-photos/company-profile-photos.component';
import { CompanyProfileVideosComponent } from './components/company/company-profile-videos/company-profile-videos.component';
import { CompanyProfilePostComponent } from './components/company/company-profile-post/company-profile-post.component';
import { CompanyProfileJobsComponent } from './components/company/company-profile-jobs/company-profile-jobs.component';
import { SideMenuComponent } from './utilities/side-menu/side-menu.component';
import { CommentsComponent } from './utilities/comments/comments.component';
import { StepperComponent } from './components/stepper/stepper.component';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { AffiliatorRefferalsComponent } from './components/affiliating/affiliator-refferals/affiliator-refferals.component';
import { AffiliateRefferalsComponent } from './components/affiliating/affiliate-refferals/affiliate-refferals.component';
import { AffiliateRefferalsTimelineComponent } from './components/affiliating/affiliate-refferals-timeline/affiliate-refferals-timeline.component';
import { AffiliateDashboardComponent } from './components/affiliating/affiliate-dashboard/affiliate-dashboard.component';
import { StateListComponent } from './component/state/state-list/state-list.component';
import { StateAddEditComponent } from './component/state/state-add-edit/state-add-edit.component';
import { StateDetailsComponent } from './component/state/state-details/state-details.component';
import { UserListComponent } from './component/user/user-list/user-list.component';
import { UserAddEditComponent } from './component/user/user-add-edit/user-add-edit.component';
import { UserDetailsComponent } from './component/user/user-details/user-details.component';
import { InstitutionTimelineComponent } from './components/institutions/institution-timeline/institution-timeline.component';
import { InstitutionTaskComponent } from './components/institutions/institution-task/institution-task.component';
import { ExamSelectionComponent } from './components/exam-selection/exam-selection.component';
import { CompanyjobComponent } from './components/company/CompantJobPost/companyjob/companyjob.component';
//import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
//import { NgxDnDModule } from '@swimlane/ngx-dnd';


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
    QuestionComponent,
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
   // UseRegistrationComponent,
    //UserRegistrationComponent,
    CompanyRegistrationComponent,
    CategoryComponent,
    TreenodeComponent,
    InstitutionRegComponent,
    DashboardComponent,
    ReviewsPortalComponent,
    ReviewsPortal1Component,
    ReviewsPortal2Component,
    ReviewsPortal3Component,
    OnlineExamComponent,
    JobPostComponent,
    JobsComponent,
    UserRegComponent,
    SocialProfileComponent,
    ChatComponent,
    InfoComponent,
    ManageAddressesComponent,
    CandidatesListingComponent,
    ProfileProjectsComponent,
    ProfileTaskTeamComponent,
    ProfileWithTeamSectionComponent,
    TaskBoardPageComponent,
    ProfileContactsComponent,
    ProfileContentComponent,
    SocialAboutComponent,
    AboutMeProfileComponent,
    ProfileWithInfoSkillsAndFriendsComponent,
    DriveFilesDocumentsUserProfileComponent,
    ProfilePageWithActivitiesComponent,
    WorksUserProfileComponent,
    SocialFriendsComponent,
    ChatAppComponent,
    ColorChatComponent,
    SimpleChatAppComponent,
    WhiteChatComponent,
    MessagesLikeMaterialDesignComponent,
    FacebookMessengerChatComponent,
    EventSchedulesWithTabsComponent,
    OwlCarouselEventsComponent,
    ProfileWithMessagesAndEditComponent,
    ProfileWithDataAndSkillsComponent,
    ProfileEditDataAndSkillsComponent,
    UserProfileWithTimelinePhotosAndSettingComponent,
    UserProfileWithTabsComponent,
    ProfileAboutInfoComponent,
    ProfileWithTimelinePostsComponent,
    ProfileAboutComponent,
    ProfilePhotosComponent,
    ProfileVideosComponent,
    ProfileFriendListComponent,
    ProjectListComponent,
    SupportTicketsComponent,
    ShopUserProfileWithTicketComponent,
    ProfileWithTimelineComponent,
    ProfileFollowersPageComponent,
    UserCardTaskListComponent,
    Bs4TimelineComponent,
    Bs4ProjectListComponent,
    TicketsForEventsComponent,
    PaqPageComponent,
    CompanyProfileComponent,
    CompanyProfileAboutComponent,
    CompanyProfilePhotosComponent,
    CompanyProfileVideosComponent,
    CompanyProfilePostComponent,
    CompanyProfileJobsComponent,
    SideMenuComponent,
    CommentsComponent,
    StepperComponent,
    AffiliatorRefferalsComponent,
    AffiliateRefferalsComponent,
    AffiliateRefferalsTimelineComponent,
    AffiliateDashboardComponent,
    StateListComponent,
    StateAddEditComponent,
    StateDetailsComponent,
    UserListComponent,
    UserAddEditComponent,
    UserDetailsComponent,
    InstitutionTimelineComponent,
    InstitutionTaskComponent,
    ExamSelectionComponent,
    CompanyjobComponent
  ],
  imports: [
    BrowserModule,CdkStepperModule,//NgMultiSelectDropDownModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule, //NgxStarRatingModule,
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
