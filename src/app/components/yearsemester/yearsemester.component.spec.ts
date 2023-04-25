import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearSemesterComponent } from './yearsemester.component';

describe('YearSemesterComponent', () => {
  let component: YearSemesterComponent;
  let fixture: ComponentFixture<YearSemesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearSemesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
