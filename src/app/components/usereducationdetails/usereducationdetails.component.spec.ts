import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEducationDetailsComponent } from './usereducationdetails.component';

describe('UserEducationDetailsComponent', () => {
  let component: UserEducationDetailsComponent;
  let fixture: ComponentFixture<UserEducationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEducationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEducationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
