import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsPortal1Component } from './reviews-portal1.component';

describe('ReviewsPortal1Component', () => {
  let component: ReviewsPortal1Component;
  let fixture: ComponentFixture<ReviewsPortal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsPortal1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsPortal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
