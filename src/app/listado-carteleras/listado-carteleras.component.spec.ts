import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCartelerasComponent } from './listado-carteleras.component';

describe('ListadoCartelerasComponent', () => {
  let component: ListadoCartelerasComponent;
  let fixture: ComponentFixture<ListadoCartelerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoCartelerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCartelerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
