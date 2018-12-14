import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCarteleraComponent } from './agregar-cartelera.component';

describe('AgregarCarteleraComponent', () => {
  let component: AgregarCarteleraComponent;
  let fixture: ComponentFixture<AgregarCarteleraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCarteleraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCarteleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
