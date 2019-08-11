import { article } from './article';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { CHARACTERS } from './Mock-data';

@Injectable({
  providedIn : 'root'
})
export class tableservice {
constructor() { }
getArticles() : Observable<article[]>{
  
  return of(CHARACTERS);}

getArticle(Title: String) :Observable<article>{
  return of(CHARACTERS.find(Data =>Data.Title===Title));
}

}
