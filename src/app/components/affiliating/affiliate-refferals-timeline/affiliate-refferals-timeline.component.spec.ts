import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateRefferalsTimelineComponent } from './affiliate-refferals-timeline.component';

describe('AffiliateRefferalsTimelineComponent', () => {
  let component: AffiliateRefferalsTimelineComponent;
  let fixture: ComponentFixture<AffiliateRefferalsTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliateRefferalsTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliateRefferalsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
