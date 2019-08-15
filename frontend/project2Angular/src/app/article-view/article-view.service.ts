import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article} from '../userarticle/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleViewService {

  private scienceUrl = 'http://mysterice.us-east-2.elasticbeanstalk.com/articles/science/';
  private techUrl ='http://mysterice.us-east-2.elasticbeanstalk.com/articles/tech/';
  private mathUrl ='http://mysterice.us-east-2.elasticbeanstalk.com/articles/math/';

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
