import { Component, OnInit } from '@angular/core';
import { Article} from '../userarticle/article';
import { ArticleViewService } from './article-view.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  scienceArticles: Article[];
  techArticles: Article[];
  mathArticles: Article[];
  constructor( private articleViewService: ArticleViewService) { }

  ngOnInit() {
  }

}
