import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { step1CompletedGuard } from './step1-completed.guard';

describe('step1CompletedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => step1CompletedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
