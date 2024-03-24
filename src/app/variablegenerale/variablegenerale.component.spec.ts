import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablegeneraleComponent } from './variablegenerale.component';

describe('VariablegeneraleComponent', () => {
  let component: VariablegeneraleComponent;
  let fixture: ComponentFixture<VariablegeneraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VariablegeneraleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VariablegeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
