import { TestBed } from '@angular/core/testing';

import { RoleCategoryService } from './rolecategory.service';

describe('RoleCategoryService', () => {
  let service: RoleCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
