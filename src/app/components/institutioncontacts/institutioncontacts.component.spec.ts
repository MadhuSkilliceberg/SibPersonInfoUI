import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionContactsComponent } from './institutioncontacts.component';

describe('InstitutionContactsComponent', () => {
  let component: InstitutionContactsComponent;
  let fixture: ComponentFixture<InstitutionContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
