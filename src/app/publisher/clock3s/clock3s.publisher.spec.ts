import { inject, TestBed } from '@angular/core/testing';

import { Clock3sPublisher } from './clock3s.publisher';

describe('Clock3sPublisher', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Clock3sPublisher]
    });
  });

  it('should be created', inject([Clock3sPublisher], (service: Clock3sPublisher) => {
    expect(service).toBeTruthy();
  }));
});
