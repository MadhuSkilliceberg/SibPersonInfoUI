import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfilePhotosComponent } from './company-profile-photos.component';

describe('CompanyProfilePhotosComponent', () => {
  let component: CompanyProfilePhotosComponent;
  let fixture: ComponentFixture<CompanyProfilePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProfilePhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyProfilePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
