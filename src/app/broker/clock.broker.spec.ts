import { inject, TestBed } from '@angular/core/testing';

import { ClockBroker } from './clock.broker';

describe('ClockBroker', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClockBroker]
    });
  });

  it('should be created', inject([ClockBroker], (service: ClockBroker) => {
    expect(service).toBeTruthy();
  }));
});
