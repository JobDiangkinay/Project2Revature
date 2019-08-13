import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../userarticle/article';

@Injectable({
  providedIn: 'root'
})
export class PendingArticleServiceService {

  private updateArticleUrl = 'http://localhost:8080/articles/update';

  constructor(private httpClient:HttpClient) { }

  updatePersonInfo(article: Article): Observable<Article>{
    return this.httpClient.post<Article>(this.updateArticleUrl, article);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};