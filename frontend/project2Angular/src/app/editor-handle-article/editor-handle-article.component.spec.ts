import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorHandleArticleComponent } from './editor-handle-article.component';

describe('EditorHandleArticleComponent', () => {
  let component: EditorHandleArticleComponent;
  let fixture: ComponentFixture<EditorHandleArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorHandleArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorHandleArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
