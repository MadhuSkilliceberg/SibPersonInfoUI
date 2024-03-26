import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTaskTeamComponent } from './profile-task-team.component';

describe('ProfileTaskTeamComponent', () => {
  let component: ProfileTaskTeamComponent;
  let fixture: ComponentFixture<ProfileTaskTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTaskTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileTaskTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
