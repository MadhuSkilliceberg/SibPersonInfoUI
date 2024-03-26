import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsPortalComponent } from './reviews-portal.component';

describe('ReviewsPortalComponent', () => {
  let component: ReviewsPortalComponent;
  let fixture: ComponentFixture<ReviewsPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
