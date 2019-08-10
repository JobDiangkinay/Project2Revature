import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article} from './article';

@Injectable({
  providedIn: 'root'
})
export class UserarticleService {

  private articleUrl = 'http://localhost:8080/articles/';

  constructor(private httpClient:HttpClient) { }

  getArticles(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(this.articleUrl);
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
