import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveFilesDocumentsUserProfileComponent } from './drive-files-documents-user-profile.component';

describe('DriveFilesDocumentsUserProfileComponent', () => {
  let component: DriveFilesDocumentsUserProfileComponent;
  let fixture: ComponentFixture<DriveFilesDocumentsUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveFilesDocumentsUserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriveFilesDocumentsUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
