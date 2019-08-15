import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article} from './article';
import { Person } from '../userinfo/person';

@Injectable({
  providedIn: 'root'
})
export class UserarticleService {

  private articleUrl = 'http://mysterice.us-east-2.elasticbeanstalk.com/articles/';
  private userArticlesUrl = 'http://mysterice.us-east-2.elasticbeanstalk.com/articles/userarticle/';
  private savedArticleUrl = 'http://mysterice.us-east-2.elasticbeanstalk.com/articles/savedarticle/';

  constructor(private httpClient:HttpClient) { }

  getArticles(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(this.articleUrl);
  }

  getUserArticles(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(this.userArticlesUrl);
  }

  getSavedArticles(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(this.savedArticleUrl);
  }

  createArticle(article: Article): Observable<Article>{
    return this.httpClient.post<Article>(this.articleUrl, article);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
