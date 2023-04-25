import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionEmailsComponent } from './institutionemails.component';

describe('InstitutionEmailsComponent', () => {
  let component: InstitutionEmailsComponent;
  let fixture: ComponentFixture<InstitutionEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionEmailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
