import { TestBed } from '@angular/core/testing';

import { AudioDBService } from './audio-db.service';

describe('AudioDBService', () => {
  let service: AudioDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
