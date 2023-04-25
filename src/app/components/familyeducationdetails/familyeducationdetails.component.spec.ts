import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyEducationDetailsComponent } from './familyeducationdetails.component';

describe('FamilyEducationDetailsComponent', () => {
  let component: FamilyEducationDetailsComponent;
  let fixture: ComponentFixture<FamilyEducationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyEducationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyEducationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
