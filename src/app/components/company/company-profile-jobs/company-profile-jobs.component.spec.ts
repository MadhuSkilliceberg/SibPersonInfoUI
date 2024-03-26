import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileJobsComponent } from './company-profile-jobs.component';

describe('CompanyProfileJobsComponent', () => {
  let component: CompanyProfileJobsComponent;
  let fixture: ComponentFixture<CompanyProfileJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProfileJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyProfileJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
