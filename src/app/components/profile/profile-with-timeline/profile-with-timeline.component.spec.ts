import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWithTimelineComponent } from './profile-with-timeline.component';

describe('ProfileWithTimelineComponent', () => {
  let component: ProfileWithTimelineComponent;
  let fixture: ComponentFixture<ProfileWithTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileWithTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileWithTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
