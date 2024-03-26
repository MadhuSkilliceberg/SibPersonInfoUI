import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWithTimelinePostsComponent } from './profile-with-timeline-posts.component';

describe('ProfileWithTimelinePostsComponent', () => {
  let component: ProfileWithTimelinePostsComponent;
  let fixture: ComponentFixture<ProfileWithTimelinePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileWithTimelinePostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileWithTimelinePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
