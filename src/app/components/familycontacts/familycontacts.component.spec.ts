import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyContactsComponent } from './familycontacts.component';

describe('FamilyContactsComponent', () => {
  let component: FamilyContactsComponent;
  let fixture: ComponentFixture<FamilyContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
