import { TestBed } from '@angular/core/testing';

import { TaskDocumentsService } from './taskdocuments.service';

describe('TaskDocumentsService', () => {
  let service: TaskDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
