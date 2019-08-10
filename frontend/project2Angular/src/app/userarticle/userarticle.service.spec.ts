import { TestBed } from '@angular/core/testing';

import { UserarticleService } from './userarticle.service';

describe('UserarticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserarticleService = TestBed.get(UserarticleService);
    expect(service).toBeTruthy();
  });
});
