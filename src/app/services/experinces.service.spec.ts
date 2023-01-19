import { TestBed } from '@angular/core/testing';

import { ExperincesService } from './experinces.service';

describe('ExperincesService', () => {
  let service: ExperincesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperincesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
