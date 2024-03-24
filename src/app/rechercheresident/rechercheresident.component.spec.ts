import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheresidentComponent } from './rechercheresident.component';

describe('RechercheresidentComponent', () => {
  let component: RechercheresidentComponent;
  let fixture: ComponentFixture<RechercheresidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechercheresidentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercheresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
