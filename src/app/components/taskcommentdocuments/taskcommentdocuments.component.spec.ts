import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCommentDocumentsComponent } from './taskcommentdocuments.component';

describe('TaskCommentDocumentsComponent', () => {
  let component: TaskCommentDocumentsComponent;
  let fixture: ComponentFixture<TaskCommentDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCommentDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCommentDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
