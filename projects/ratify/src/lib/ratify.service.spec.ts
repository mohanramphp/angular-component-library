import { TestBed, inject } from '@angular/core/testing';

import { RatifyService } from './ratify.service';

describe('RatifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatifyService]
    });
  });

  it('should be created', inject([RatifyService], (service: RatifyService) => {
    expect(service).toBeTruthy();
  }));
});
