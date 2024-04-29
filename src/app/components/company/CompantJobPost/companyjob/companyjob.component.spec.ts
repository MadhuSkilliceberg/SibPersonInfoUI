import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyjobComponent } from './companyjob.component';

describe('CompanyjobComponent', () => {
  let component: CompanyjobComponent;
  let fixture: ComponentFixture<CompanyjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyjobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
