import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatorRefferalsComponent } from './affiliator-refferals.component';

describe('AffiliatorRefferalsComponent', () => {
  let component: AffiliatorRefferalsComponent;
  let fixture: ComponentFixture<AffiliatorRefferalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliatorRefferalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliatorRefferalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
