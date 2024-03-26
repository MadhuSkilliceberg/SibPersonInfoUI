import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAboutInfoComponent } from './profile-about-info.component';

describe('ProfileAboutInfoComponent', () => {
  let component: ProfileAboutInfoComponent;
  let fixture: ComponentFixture<ProfileAboutInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAboutInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAboutInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
