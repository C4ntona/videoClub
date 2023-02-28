import { TestBed } from '@angular/core/testing';

import { GesitionarPeliculasService } from './gesitionar-peliculas.service';

describe('GesitionarPeliculasService', () => {
  let service: GesitionarPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GesitionarPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
