import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryTypesComponent } from './industrytypes.component';

describe('IndustryTypesComponent', () => {
  let component: IndustryTypesComponent;
  let fixture: ComponentFixture<IndustryTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
