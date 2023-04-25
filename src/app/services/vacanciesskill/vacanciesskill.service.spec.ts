import { TestBed } from '@angular/core/testing';

import { VacanciesSkillService } from './vacanciesskill.service';

describe('VacanciesSkillService', () => {
  let service: VacanciesSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacanciesSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
