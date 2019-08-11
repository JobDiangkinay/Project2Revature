import { tableservice } from './../table-service.service';
import { article } from './../article';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, LocationChangeEvent } from '@angular/common';


@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent implements OnInit {
Data : article;
  

  constructor(
    private route:ActivatedRoute,
    private local:Location,
    private ts:tableservice
  ) { }

  ngOnInit(): void {
    this.getArticle();
  }
  getArticle() : void{
    const Title = ""+this.route.snapshot.paramMap.get('Title');
    this.ts.getArticle(Title).subscribe(Data => this.Data = Data);
  }
}
