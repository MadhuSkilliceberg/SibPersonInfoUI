import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionTaskComponent } from './institution-task.component';

describe('InstitutionTaskComponent', () => {
  let component: InstitutionTaskComponent;
  let fixture: ComponentFixture<InstitutionTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
