import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWithMessagesAndEditComponent } from './profile-with-messages-and-edit.component';

describe('ProfileWithMessagesAndEditComponent', () => {
  let component: ProfileWithMessagesAndEditComponent;
  let fixture: ComponentFixture<ProfileWithMessagesAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileWithMessagesAndEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileWithMessagesAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
