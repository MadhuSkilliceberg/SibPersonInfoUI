import { TestBed } from '@angular/core/testing';

import { UserCoursesService } from './usercourses.service';

describe('UserCoursesService', () => {
  let service: UserCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
