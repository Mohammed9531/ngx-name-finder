import { TestBed, inject } from '@angular/core/testing';
import { FinderHttpInterceptor } from './finder-http-interceptor.service';

describe('HttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinderHttpInterceptor]
    });
  });

  it('should be created', inject([FinderHttpInterceptor], (service: FinderHttpInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
