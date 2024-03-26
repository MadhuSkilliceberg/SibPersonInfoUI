import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFriendListComponent } from './profile-friend-list.component';

describe('ProfileFriendListComponent', () => {
  let component: ProfileFriendListComponent;
  let fixture: ComponentFixture<ProfileFriendListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileFriendListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileFriendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
