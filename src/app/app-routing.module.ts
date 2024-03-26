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
import { QuestionComponent } from './components/question/question.component';
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
// import { UseRegistrationComponent } from './components/use-registration/use-registration.component';
// import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { CompanyRegistrationComponent } from './components/company-registration/company-registration.component';
import { CategoryComponent } from './components/category/category.component';
import { InstitutionRegComponent } from './components/institiutionDetails/institution-reg/institution-reg.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ReviewsPortalComponent } from './components/reviews-portal/reviews-portal.component';
import { ReviewsPortal1Component } from './components/reviews-portal1/reviews-portal1.component';
import { ReviewsPortal2Component } from './components/reviews-portal2/reviews-portal2.component';
import { ReviewsPortal3Component } from './components/reviews-portal3/reviews-portal3.component';
import { JobsComponent } from './components/jobs/jobs/jobs.component';
import { OnlineExamComponent } from './components/exam/online-exam/online-exam.component';
import { SocialProfileComponent } from './components/timeline/social-profile/social-profile.component';
import { InfoComponent } from './components/timeline/info/info.component';
import { SocialAboutComponent } from './components/timeline/social-about/social-about.component';


import { ManageAddressesComponent } from './components/timeline/manage-addresses/manage-addresses.component';
import { CandidatesListingComponent } from './components/timeline/candidates-listing/candidates-listing.component';
import { ProfileProjectsComponent } from './components/projects/profile-projects/profile-projects.component';
import { ProfileTaskTeamComponent } from './components/projects/profile-task-team/profile-task-team.component';
import { ProfileWithTeamSectionComponent } from './components/projects/profile-with-team-section/profile-with-team-section.component';
import { TaskBoardPageComponent } from './components/projects/task-board-page/task-board-page.component';
import { ProfileContactsComponent } from './components/timeline/profile-contacts/profile-contacts.component';
import { ProfileContentComponent } from './components/timeline/profile-content/profile-content.component';

 
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
import { CompanyProfilePostComponent } from './components/company/company-profile-post/company-profile-post.component';
import { CompanyProfileJobsComponent } from './components/company/company-profile-jobs/company-profile-jobs.component';
import { CompanyProfilePhotosComponent } from './components/company/company-profile-photos/company-profile-photos.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { AffiliatorRefferalsComponent } from './components/affiliating/affiliator-refferals/affiliator-refferals.component';
import { AffiliateRefferalsComponent } from './components/affiliating/affiliate-refferals/affiliate-refferals.component';
import { AffiliateRefferalsTimelineComponent } from './components/affiliating/affiliate-refferals-timeline/affiliate-refferals-timeline.component';
import { AffiliateDashboardComponent } from './components/affiliating/affiliate-dashboard/affiliate-dashboard.component';
import { UserRegComponent } from './components/user-registration/user-reg/user-reg.component';
import { InstitutionTimelineComponent } from './components/institutions/institution-timeline/institution-timeline.component';
import { InstitutionTaskComponent } from './components/institutions/institution-task/institution-task.component';
//import { UserRegComponent } from './components/user-registration/user-reg/user-reg.component';
import { ExamSelectionComponent } from './components/exam-selection/exam-selection.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'exam', component: ExamSelectionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: LoginComponent },
  // { path: 'reg', component: UseRegistrationComponent },
  // { path: 'reg/:id', component: UseRegistrationComponent },
  // { path: 'user-reg', component: UserRegistrationComponent },
  // { path: 'ueser-reg/:id', component: UserRegistrationComponent },
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
  { path: 'companyRegistration', component: CompanyRegistrationComponent },
  { path: 'Category', component: CategoryComponent },
  {path :'institution-reg',component:InstitutionRegComponent},
  {path :'institution-reg/:id',component:InstitutionRegComponent},
  { path: 'company_reg', component: CompanyRegistrationComponent },
  { path: 'company_reg/:id', component: CompanyRegistrationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'OnlineExam', component: OnlineExamComponent },
  { path: 'ReviewsPortal1', component: ReviewsPortal1Component },
  { path: 'ReviewsPortal2', component: ReviewsPortal2Component },
  { path: 'ReviewsPortal3', component: ReviewsPortal3Component },
  { path: 'SocialProfile', component: SocialProfileComponent },
  { path: 'info', component: InfoComponent },
  { path: 'SocialAbout', component: SocialAboutComponent },
  
  { path: 'ManageAddresses', component: ManageAddressesComponent},
  { path: 'CandidatesListing', component: CandidatesListingComponent},
  { path: 'ProfileProjects', component: ProfileProjectsComponent},
  { path: 'ProfileTaskTeam', component: ProfileTaskTeamComponent},
  { path: 'ProfileWithTeamSection', component: ProfileWithTeamSectionComponent},
  { path: 'TaskBoardPage', component: TaskBoardPageComponent},
  { path: 'ProfileContacts', component: ProfileContactsComponent},
  { path: 'ProfileContent', component: ProfileContentComponent},
  { path: 'AboutMeProfile', component: AboutMeProfileComponent},
  { path: 'ProfileWithInfoSkillsAndFriends', component: ProfileWithInfoSkillsAndFriendsComponent},
  { path: 'DriveFilesDocumentsUserProfile', component: DriveFilesDocumentsUserProfileComponent},
  { path: 'ProfilePageWithActivities', component: ProfilePageWithActivitiesComponent},
  { path: 'WorksUserProfile', component: WorksUserProfileComponent},
  { path: 'SocialFriends', component: SocialFriendsComponent},
  { path: 'ChatApp', component: ChatAppComponent},
  { path: 'ColorChat', component: ColorChatComponent},
  { path: 'SimpleChatApp', component: SimpleChatAppComponent},
  { path: 'WhiteChat', component: WhiteChatComponent},
  { path: 'MessagesLikeMaterialDesign', component: MessagesLikeMaterialDesignComponent},
  { path: 'FacebookMessengerChat', component: FacebookMessengerChatComponent},
  { path: 'EventSchedulesWithTabs', component: EventSchedulesWithTabsComponent},
  { path: 'OwlCarouselEvents', component: OwlCarouselEventsComponent},
  { path: 'ProfileWithMessagesAndEdit', component: ProfileWithMessagesAndEditComponent},
  { path: 'ProfileWithDataAndSkills', component: ProfileWithDataAndSkillsComponent},
  { path: 'ProfileEditDataAndSkills', component: ProfileEditDataAndSkillsComponent},
  { path: 'UserProfileWithTimelinePhotosAndSetting', component: UserProfileWithTimelinePhotosAndSettingComponent},
  { path: 'UserProfileWithTabs', component: UserProfileWithTabsComponent},
  { path: 'ProfileAboutInfo', component: ProfileAboutInfoComponent},
  { path: 'ProfileWithTimelinePosts', component: ProfileWithTimelinePostsComponent},
  { path: 'ProfileAbout', component: ProfileAboutComponent},
  { path: 'ProfilePhotos', component: ProfilePhotosComponent},
  { path: 'ProfileVideos', component: ProfileVideosComponent},
  { path: 'ProfileFriendList', component: ProfileFriendListComponent},
  { path: 'ProjectList', component: ProjectListComponent},
  { path: 'SupportTickets', component: SupportTicketsComponent},
  { path: 'ShopUserProfileWithTicket', component: ShopUserProfileWithTicketComponent},
  { path: 'ProfileWithTimeline', component: ProfileWithTimelineComponent},
  { path: 'ProfileFollowersPage', component: ProfileFollowersPageComponent},
  { path: 'UserCardTaskList', component: UserCardTaskListComponent},
  { path: 'Bs4Timeline', component: Bs4TimelineComponent},
  { path: 'Bs4ProjectList', component: Bs4ProjectListComponent},
  { path: 'TicketsForEvents', component: TicketsForEventsComponent},
  { path: 'PaqPage', component: PaqPageComponent},

  { path: 'CompanyProfilePost', component: CompanyProfilePostComponent},
  { path: 'CompanyProfileJobs', component: CompanyProfileJobsComponent},
  { path: 'CompanyProfilePhotos', component: CompanyProfilePhotosComponent},
  { path: 'Stepper', component: StepperComponent},
  { path: 'AffiliatorRefferals', component: AffiliatorRefferalsComponent},
  { path: 'AffiliateRefferals', component: AffiliateRefferalsComponent},
  { path: 'AffiliateRefferalsTimeline', component: AffiliateRefferalsTimelineComponent},
  { path: 'AffiliateDashboard', component: AffiliateDashboardComponent},
  { path: 'UserReg', component: UserRegComponent},
  
  { path: 'UserReg/:id', component: UserRegComponent},
  { path: 'InstitutionTimeline', component: InstitutionTimelineComponent},
  { path: 'InstitutionTask', component: InstitutionTaskComponent},
  
  { path: 'Question', component: QuestionComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
