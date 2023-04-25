import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyEmailsComponent } from './familyemails.component';

describe('FamilyEmailsComponent', () => {
  let component: FamilyEmailsComponent;
  let fixture: ComponentFixture<FamilyEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyEmailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
