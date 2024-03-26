import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWithTeamSectionComponent } from './profile-with-team-section.component';

describe('ProfileWithTeamSectionComponent', () => {
  let component: ProfileWithTeamSectionComponent;
  let fixture: ComponentFixture<ProfileWithTeamSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileWithTeamSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileWithTeamSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
