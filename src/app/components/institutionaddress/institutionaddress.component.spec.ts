import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionAddressComponent } from './institutionaddress.component';

describe('InstitutionAddressComponent', () => {
  let component: InstitutionAddressComponent;
  let fixture: ComponentFixture<InstitutionAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
