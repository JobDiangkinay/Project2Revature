import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article} from '../userarticle/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleDetailService {

  private articleUrl = 'http://localhost:8080/articles/';

  constructor(private httpClient: HttpClient) { }

  getArticleById(id : Number): Observable<Article>{
    const url = `${this.articleUrl}/${id}`;
    return this.httpClient.get<Article>(url);
  }
}
