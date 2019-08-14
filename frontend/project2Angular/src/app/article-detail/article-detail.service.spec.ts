import { TestBed } from '@angular/core/testing';

import { ArticleDetailService } from './article-detail.service';

describe('ArticleDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleDetailService = TestBed.get(ArticleDetailService);
    expect(service).toBeTruthy();
  });
});
