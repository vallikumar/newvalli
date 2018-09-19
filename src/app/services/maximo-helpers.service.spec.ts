import { TestBed, inject } from '@angular/core/testing';

import { MaximoHelpersService } from './maximo-helpers.service';

describe('MaximoHelpersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaximoHelpersService]
    });
  });

  it('should be created', inject([MaximoHelpersService], (service: MaximoHelpersService) => {
    expect(service).toBeTruthy();
  }));
});
