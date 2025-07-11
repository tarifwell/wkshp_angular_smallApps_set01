import { TestBed } from '@angular/core/testing';

import { ServiceHerosService } from './service-heros.service';

describe('ServiceHerosService', () => {
  let service: ServiceHerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
