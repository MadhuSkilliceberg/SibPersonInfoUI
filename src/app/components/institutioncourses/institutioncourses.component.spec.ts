import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionCoursesComponent } from './institutioncourses.component';

describe('InstitutionCoursesComponent', () => {
  let component: InstitutionCoursesComponent;
  let fixture: ComponentFixture<InstitutionCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
