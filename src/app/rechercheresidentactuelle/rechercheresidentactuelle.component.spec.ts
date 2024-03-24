import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheresidentactuelleComponent } from './rechercheresidentactuelle.component';

describe('RechercheresidentactuelleComponent', () => {
  let component: RechercheresidentactuelleComponent;
  let fixture: ComponentFixture<RechercheresidentactuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechercheresidentactuelleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercheresidentactuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
