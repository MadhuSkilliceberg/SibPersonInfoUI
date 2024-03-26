import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditDataAndSkillsComponent } from './profile-edit-data-and-skills.component';

describe('ProfileEditDataAndSkillsComponent', () => {
  let component: ProfileEditDataAndSkillsComponent;
  let fixture: ComponentFixture<ProfileEditDataAndSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEditDataAndSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEditDataAndSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
