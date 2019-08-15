import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article} from '../userarticle/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleDetailService {

  private articleUrl = 'http://mysterice.us-east-2.elasticbeanstalk.com/articles/';

  constructor(private httpClient: HttpClient) { }

  getArticleById(id : Number): Observable<Article>{
    const url = `${this.articleUrl}/${id}`;
    return this.httpClient.get<Article>(url);
  }
}
