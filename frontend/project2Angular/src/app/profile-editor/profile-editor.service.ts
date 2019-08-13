import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class ProfileEditorService {

  private signUpUrl = 'http://localhost:8080/users/';
  constructor(private httpClient:HttpClient) { }

  InsertUser(User: User): Observable<User>{
    return this.httpClient.post<User>(this.signUpUrl, User);
  }
  checkusername(username: string): Observable<String>{
    const url = `${this.signUpUrl}/${username}`;
    return this.httpClient.get<String>(url);
  }

  
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};