import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QulificationTypeComponent } from './qulificationtype.component';

describe('QulificationTypeComponent', () => {
  let component: QulificationTypeComponent;
  let fixture: ComponentFixture<QulificationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QulificationTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QulificationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
