import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTypeComponent } from './templatetype.component';

describe('TemplateTypeComponent', () => {
  let component: TemplateTypeComponent;
  let fixture: ComponentFixture<TemplateTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
