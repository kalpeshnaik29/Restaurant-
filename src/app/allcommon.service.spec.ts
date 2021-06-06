import { TestBed } from '@angular/core/testing';

import { AllcommonService } from './allcommon.service';

describe('AllcommonService', () => {
  let service: AllcommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllcommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
