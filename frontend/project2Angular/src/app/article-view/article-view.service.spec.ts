import { TestBed } from '@angular/core/testing';

import { ArticleViewService } from './article-view.service';

describe('ArticleViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleViewService = TestBed.get(ArticleViewService);
    expect(service).toBeTruthy();
  });
});
