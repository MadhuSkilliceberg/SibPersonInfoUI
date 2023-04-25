import { TestBed } from '@angular/core/testing';

import { TaskCommentDocumentsService } from './taskcommentdocuments.service';

describe('TaskCommentDocumentsService', () => {
  let service: TaskCommentDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskCommentDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
