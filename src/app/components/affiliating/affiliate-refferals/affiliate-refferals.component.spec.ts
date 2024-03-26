import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateRefferalsComponent } from './affiliate-refferals.component';

describe('AffiliateRefferalsComponent', () => {
  let component: AffiliateRefferalsComponent;
  let fixture: ComponentFixture<AffiliateRefferalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliateRefferalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliateRefferalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
