import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsPortal2Component } from './reviews-portal2.component';

describe('ReviewsPortal2Component', () => {
  let component: ReviewsPortal2Component;
  let fixture: ComponentFixture<ReviewsPortal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsPortal2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsPortal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
