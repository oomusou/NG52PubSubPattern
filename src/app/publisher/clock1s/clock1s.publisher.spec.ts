import { inject, TestBed } from '@angular/core/testing';
import { Clock1sPublisher } from './clock1s.publisher';

describe('Clock1sPublisher', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Clock1sPublisher]
    });
  });

  it('should be created', inject([Clock1sPublisher], (service: Clock1sPublisher) => {
    expect(service).toBeTruthy();
  }));
});
