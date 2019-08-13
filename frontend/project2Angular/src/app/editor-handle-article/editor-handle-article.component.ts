import { Component, OnInit } from '@angular/core';
import { Person } from "../userinfo/person";
import { Article } from "../userarticle/article";
import { EditorHandleArticleService } from './editor-handle-article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editor-handle-article',
  templateUrl: './editor-handle-article.component.html',
  styleUrls: ['./editor-handle-article.component.css']
})
export class EditorHandleArticleComponent implements OnInit {
  selArticle: Article;
  showSelArticle: boolean = false;

  pendingArticles: Observable<Article[]>;
  constructor(private editorHandleArticleService: EditorHandleArticleService) { }

  ngOnInit() {
    this.pendingArticles = this.editorHandleArticleService.getPendingArticles();
  }

  closeHandleSpecArticle() {
    this.selArticle = null;
    this.showSelArticle = false;
  }

  handleSpecArticle(curArticle: Article) {

    this.selArticle = curArticle;
    this.showSelArticle = true;
  }
}
