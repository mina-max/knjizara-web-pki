import { TestBed } from '@angular/core/testing';

import { DialogDodajKnjiguService } from './dialog-dodaj-knjigu.service';

describe('DialogDodajKnjiguService', () => {
  let service: DialogDodajKnjiguService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogDodajKnjiguService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
