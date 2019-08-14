import { Component, OnInit, Input } from '@angular/core';
import {Article} from '../userarticle/article';

@Component({
  selector: 'app-userviewarticle',
  templateUrl: './userviewarticle.component.html',
  styleUrls: ['./userviewarticle.component.css']
})
export class UserviewarticleComponent implements OnInit {
  @Input() selectArticle: Article;
  currentSelectedArticle: Article;
  showEditorPanel:boolean = false;

  constructor() { }

  ngOnInit() {
    this.currentSelectedArticle = this.selectArticle;
  }
  handleBackButton(){
    this.showEditorPanel = true;
  }

}
