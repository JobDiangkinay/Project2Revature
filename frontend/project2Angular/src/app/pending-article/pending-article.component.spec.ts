import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingArticleComponent } from './pending-article.component';

describe('PendingArticleComponent', () => {
  let component: PendingArticleComponent;
  let fixture: ComponentFixture<PendingArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
