import { TestBed } from '@angular/core/testing';

import { PendingArticleServiceService } from './pending-article-service.service';

describe('PendingArticleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendingArticleServiceService = TestBed.get(PendingArticleServiceService);
    expect(service).toBeTruthy();
  });
});
