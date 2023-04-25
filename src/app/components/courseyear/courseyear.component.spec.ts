import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseYearComponent } from './courseyear.component';

describe('CourseYearComponent', () => {
  let component: CourseYearComponent;
  let fixture: ComponentFixture<CourseYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
