/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthRoutesService } from './authRoutes.service';

describe('Service: AuthRoutes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRoutesService]
    });
  });

  it('should ...', inject([AuthRoutesService], (service: AuthRoutesService) => {
    expect(service).toBeTruthy();
  }));
});
