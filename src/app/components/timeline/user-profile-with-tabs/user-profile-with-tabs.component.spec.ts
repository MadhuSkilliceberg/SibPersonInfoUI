import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileWithTabsComponent } from './user-profile-with-tabs.component';

describe('UserProfileWithTabsComponent', () => {
  let component: UserProfileWithTabsComponent;
  let fixture: ComponentFixture<UserProfileWithTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileWithTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileWithTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
