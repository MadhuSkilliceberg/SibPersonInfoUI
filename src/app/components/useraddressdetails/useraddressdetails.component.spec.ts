import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressDetailsComponent } from './useraddressdetails.component';

describe('UserAddressDetailsComponent', () => {
  let component: UserAddressDetailsComponent;
  let fixture: ComponentFixture<UserAddressDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddressDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
