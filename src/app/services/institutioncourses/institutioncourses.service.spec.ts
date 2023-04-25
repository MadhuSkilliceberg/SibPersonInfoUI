import { TestBed } from '@angular/core/testing';

import { InstitutionCoursesService } from './institutioncourses.service';

describe('InstitutionCoursesService', () => {
  let service: InstitutionCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstitutionCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
