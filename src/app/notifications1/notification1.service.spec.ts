import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification1.service';

describe('Notification1Service', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
