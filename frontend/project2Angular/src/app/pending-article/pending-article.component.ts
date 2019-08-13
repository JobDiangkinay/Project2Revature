import { Component, OnInit, Input } from '@angular/core';
import {Article} from '../userarticle/article';
import {PendingArticleServiceService} from './pending-article-service.service'

@Component({
  selector: 'app-pending-article',
  templateUrl: './pending-article.component.html',
  styleUrls: ['./pending-article.component.css']
})
export class PendingArticleComponent implements OnInit {
  @Input() selectArticle: Article;
  currentPendingArticle: Article;
  showEditorPanel:boolean = false;

  constructor(private PendingArticleService: PendingArticleServiceService) { }

  ngOnInit() {
    this.currentPendingArticle = this.selectArticle;
  }

  updateArticleStatus(status:boolean){
    if(status){
      this.currentPendingArticle.articleStatus = "approved";
      this.PendingArticleService.updatePersonInfo(this.currentPendingArticle).subscribe(article => this.handleEditorPanel(article));
    }
    else if(!status){
      this.currentPendingArticle.articleStatus = "denied";
      this.PendingArticleService.updatePersonInfo(this.currentPendingArticle).subscribe(article => this.handleEditorPanel(article));
    }
  }

  handleEditorPanel(article:Article){
    if(article.articleStatus == "approved" || article.articleStatus == "denied"){
      this.showEditorPanel = true;
    }
  }

  handleBackButton(){
    this.showEditorPanel = true;
  }

}
