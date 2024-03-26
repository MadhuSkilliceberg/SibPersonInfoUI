import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileVideosComponent } from './company-profile-videos.component';

describe('CompanyProfileVideosComponent', () => {
  let component: CompanyProfileVideosComponent;
  let fixture: ComponentFixture<CompanyProfileVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProfileVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyProfileVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
