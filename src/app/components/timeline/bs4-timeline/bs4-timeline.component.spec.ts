import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bs4TimelineComponent } from './bs4-timeline.component';

describe('Bs4TimelineComponent', () => {
  let component: Bs4TimelineComponent;
  let fixture: ComponentFixture<Bs4TimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bs4TimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bs4TimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
