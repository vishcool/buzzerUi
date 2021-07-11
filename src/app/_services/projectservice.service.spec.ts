import { TestBed } from '@angular/core/testing';

import { ProjectserviceService } from './projectservice.service';

describe('PojectserviceService', () => {
  let service: ProjectserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
