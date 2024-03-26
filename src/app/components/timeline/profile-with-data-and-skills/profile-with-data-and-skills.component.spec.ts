import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWithDataAndSkillsComponent } from './profile-with-data-and-skills.component';

describe('ProfileWithDataAndSkillsComponent', () => {
  let component: ProfileWithDataAndSkillsComponent;
  let fixture: ComponentFixture<ProfileWithDataAndSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileWithDataAndSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileWithDataAndSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
