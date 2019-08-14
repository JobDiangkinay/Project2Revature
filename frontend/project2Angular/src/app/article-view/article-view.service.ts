import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article} from '../userarticle/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleViewService {

  private scienceUrl = 'http://localhost:8080/articles/science';
  private techUrl ='http://localhost:8080/articles/tech';
  private mathUrl ='http://localhost:8080/articles/math';

  constructor(private httpClient: HttpClient) { }

  getScienceArticles(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(this.scienceUrl);
  }

  getTechArticles(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(this.techUrl);
  }

  getMathArticles(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(this.mathUrl);
  }
}
