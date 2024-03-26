import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsPortal3Component } from './reviews-portal3.component';

describe('ReviewsPortal3Component', () => {
  let component: ReviewsPortal3Component;
  let fixture: ComponentFixture<ReviewsPortal3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsPortal3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsPortal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
