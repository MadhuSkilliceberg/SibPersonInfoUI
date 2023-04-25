import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesSkillComponent } from './vacanciesskill.component';

describe('VacanciesSkillComponent', () => {
  let component: VacanciesSkillComponent;
  let fixture: ComponentFixture<VacanciesSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacanciesSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacanciesSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
