import { TestBed } from '@angular/core/testing';

import { CarteleraService } from './cartelera.service';

describe('CarteleraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarteleraService = TestBed.get(CarteleraService);
    expect(service).toBeTruthy();
  });
});
