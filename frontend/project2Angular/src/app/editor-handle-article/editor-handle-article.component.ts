import { Component, OnInit } from '@angular/core';
import { Person } from "../userinfo/person";
import {Article} from "../userarticle/article";
import { EditorHandleArticleService } from './editor-handle-article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editor-handle-article',
  templateUrl: './editor-handle-article.component.html',
  styleUrls: ['./editor-handle-article.component.css']
})
export class EditorHandleArticleComponent implements OnInit {

  pendingArticles:Observable<Article[]>;
  constructor(private editorHandleArticleService: EditorHandleArticleService) { }

  ngOnInit() {
    this.pendingArticles = this.editorHandleArticleService.getPendingArticles();
  }

  handleSpecArticle(curArticle: Article){
    let selArticle = curArticle;
  }
}
