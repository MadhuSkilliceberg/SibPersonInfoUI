import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageWithActivitiesComponent } from './profile-page-with-activities.component';

describe('ProfilePageWithActivitiesComponent', () => {
  let component: ProfilePageWithActivitiesComponent;
  let fixture: ComponentFixture<ProfilePageWithActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageWithActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePageWithActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
