import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarritalStatusComponent } from './marritalstatus.component';

describe('MarritalStatusComponent', () => {
  let component: MarritalStatusComponent;
  let fixture: ComponentFixture<MarritalStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarritalStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarritalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
