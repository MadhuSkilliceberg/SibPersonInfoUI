import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyContactsComponent } from './companycontacts.component';

describe('CompanyContactsComponent', () => {
  let component: CompanyContactsComponent;
  let fixture: ComponentFixture<CompanyContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
