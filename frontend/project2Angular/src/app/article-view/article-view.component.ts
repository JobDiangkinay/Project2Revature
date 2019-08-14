import { Component, OnInit } from '@angular/core';
import { Article} from '../userarticle/article';
import { ArticleViewService } from './article-view.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  selArticle: Article;
  scienceArticles: Article[];
  techArticles: Article[];
  mathArticles: Article[];
  showSelArticle: boolean = false;
  constructor( private articleViewService: ArticleViewService) { }

  ngOnInit() {
    this.articleViewService.getScienceArticles().subscribe(scienceList => this.scienceArticles = scienceList);
    this.articleViewService.getTechArticles().subscribe(techList => this.techArticles = techList);
    this.articleViewService.getMathArticles().subscribe(mathList => this.mathArticles = mathList);
  }

  handleArticle(curArticle: Article){
    this.selArticle = curArticle;
    this.showSelArticle = true;
  }
}
