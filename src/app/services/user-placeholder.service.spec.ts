import { TestBed } from '@angular/core/testing';

import { UserPlaceholderService } from './user-placeholder.service';

describe('UserPlaceholderService', () => {
  let service: UserPlaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPlaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
