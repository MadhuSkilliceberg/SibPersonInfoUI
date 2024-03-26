import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWithInfoSkillsAndFriendsComponent } from './profile-with-info-skills-and-friends.component';

describe('ProfileWithInfoSkillsAndFriendsComponent', () => {
  let component: ProfileWithInfoSkillsAndFriendsComponent;
  let fixture: ComponentFixture<ProfileWithInfoSkillsAndFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileWithInfoSkillsAndFriendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileWithInfoSkillsAndFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
