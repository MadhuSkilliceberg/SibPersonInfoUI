import { TestBed } from '@angular/core/testing';

import { QuestionCategoryService } from './questioncategory.service';

describe('QuestioncategoryService', () => {
  let service: QuestionCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
