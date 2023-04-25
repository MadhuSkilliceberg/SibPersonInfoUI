import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CYearsComponent } from './cyears.component';

describe('CYearsComponent', () => {
  let component: CYearsComponent;
  let fixture: ComponentFixture<CYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CYearsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
