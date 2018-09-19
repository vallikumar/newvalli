import { TestBed, inject } from '@angular/core/testing';

import { ReporterlistService } from './reporterlist.service';

describe('ReporterlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReporterlistService]
    });
  });

  it('should be created', inject([ReporterlistService], (service: ReporterlistService) => {
    expect(service).toBeTruthy();
  }));
});
