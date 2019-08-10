import { TestBed } from '@angular/core/testing';

import { EditorHandleArticleService } from './editor-handle-article.service';

describe('EditorHandleArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditorHandleArticleService = TestBed.get(EditorHandleArticleService);
    expect(service).toBeTruthy();
  });
});
