import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionTimelineComponent } from './institution-timeline.component';

describe('InstitutionTimelineComponent', () => {
  let component: InstitutionTimelineComponent;
  let fixture: ComponentFixture<InstitutionTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
