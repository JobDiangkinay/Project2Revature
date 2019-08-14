import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class ProfileEditorService {

  private signUpUrl = 'http://localhost:8080/users/';
  constructor(private httpClient:HttpClient) {
    
   }


  InsertUser(User: User): Observable<User>{
    return this.httpClient.post<User>(this.signUpUrl, User);
  }
  checkusername(username: string): Observable<User>{
    
    const url = `${this.signUpUrl}${username}`;
    return this.httpClient.get<User>(url);
  }

  
}


const httpOptions = {
  responseType:'text',
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};