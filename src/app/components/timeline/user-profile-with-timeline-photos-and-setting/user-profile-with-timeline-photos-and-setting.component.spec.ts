import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileWithTimelinePhotosAndSettingComponent } from './user-profile-with-timeline-photos-and-setting.component';

describe('UserProfileWithTimelinePhotosAndSettingComponent', () => {
  let component: UserProfileWithTimelinePhotosAndSettingComponent;
  let fixture: ComponentFixture<UserProfileWithTimelinePhotosAndSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileWithTimelinePhotosAndSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileWithTimelinePhotosAndSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
