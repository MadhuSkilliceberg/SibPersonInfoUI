import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksUserProfileComponent } from './works-user-profile.component';

describe('WorksUserProfileComponent', () => {
  let component: WorksUserProfileComponent;
  let fixture: ComponentFixture<WorksUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksUserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
