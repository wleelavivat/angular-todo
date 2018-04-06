import { TestBed, inject } from '@angular/core/testing';

import { PagerDutyService } from './pager-duty.service';

describe('PagerDutyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagerDutyService]
    });
  });

  it('should be created', inject([PagerDutyService], (service: PagerDutyService) => {
    expect(service).toBeTruthy();
  }));
});
