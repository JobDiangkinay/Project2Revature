import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleDetailService } from './article-detail.service';
import { Article } from '../userarticle/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  @Input() selectArticle: Article;
  currentArticle: Article;
  article = Article;
  showArticleDetail: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private articleDetailService: ArticleDetailService) { }

  ngOnInit() {
    this.currentArticle =this.selectArticle;
    // this.getArticle();
  }

  handleBackButton(){
    this.showArticleDetail = true;
  }

  // getArticle(): void{
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   console.log(id);
  //   this.articleDetailService.getArticleById(id);
  // }

}
