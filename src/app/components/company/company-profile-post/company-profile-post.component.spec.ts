import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfilePostComponent } from './company-profile-post.component';

describe('CompanyProfilePostComponent', () => {
  let component: CompanyProfilePostComponent;
  let fixture: ComponentFixture<CompanyProfilePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProfilePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyProfilePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
