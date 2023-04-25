import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutryStatesComponent } from './coutrystates.component';

describe('CoutryStatesComponent', () => {
  let component: CoutryStatesComponent;
  let fixture: ComponentFixture<CoutryStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoutryStatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoutryStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
