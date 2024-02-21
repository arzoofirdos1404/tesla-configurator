import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { step2CompletedGuardGuard } from './step2-completed-guard.guard';

describe('step2CompletedGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => step2CompletedGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
