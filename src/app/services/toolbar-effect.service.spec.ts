import { TestBed } from '@angular/core/testing';

import { ToolbarEffectService } from './toolbar-effect.service';

describe('ToolbarEffectService', () => {
  let service: ToolbarEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolbarEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
