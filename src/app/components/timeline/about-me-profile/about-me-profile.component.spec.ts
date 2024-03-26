import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeProfileComponent } from './about-me-profile.component';

describe('AboutMeProfileComponent', () => {
  let component: AboutMeProfileComponent;
  let fixture: ComponentFixture<AboutMeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
