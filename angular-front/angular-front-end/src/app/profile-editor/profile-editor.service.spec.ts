import { TestBed } from '@angular/core/testing';

import { ProfileEditorService } from './profile-editor.service';

describe('ProfileEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileEditorService = TestBed.get(ProfileEditorService);
    expect(service).toBeTruthy();
  });
});
