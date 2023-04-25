import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationTypesComponent } from './relationtypes.component';

describe('RelationTypesComponent', () => {
  let component: RelationTypesComponent;
  let fixture: ComponentFixture<RelationTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
