import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqPageComponent } from './paq-page.component';

describe('PaqPageComponent', () => {
  let component: PaqPageComponent;
  let fixture: ComponentFixture<PaqPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaqPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaqPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
