import { TestBed } from '@angular/core/testing';

import { KeyproviderService } from './keyprovider.service';

describe('KeyproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyproviderService = TestBed.get(KeyproviderService);
    expect(service).toBeTruthy();
  });
});
