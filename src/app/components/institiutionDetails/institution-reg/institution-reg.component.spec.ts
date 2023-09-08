import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionRegComponent } from './institution-reg.component';

describe('InstitutionRegComponent', () => {
  let component: InstitutionRegComponent;
  let fixture: ComponentFixture<InstitutionRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
