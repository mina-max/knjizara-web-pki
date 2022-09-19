import { TestBed } from '@angular/core/testing';

import { DialogPreporuciKnjiguService } from './dialog-preporuci-knjigu.service';

describe('DialogPreporuciKnjiguService', () => {
  let service: DialogPreporuciKnjiguService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogPreporuciKnjiguService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
