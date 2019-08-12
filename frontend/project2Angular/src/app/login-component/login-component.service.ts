import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginComponentService {
  private loginUrl = 'http://localhost:8080/users/login';
  constructor(private httpClient:HttpClient) { }
/*
  LoginUser(): Observable<User>{
    return this.httpClient.get<User>(this.loginUrl);
  }*/
  LoginUser(username: string,password:string): Observable<User>{
    const url = `${this.loginUrl}/${username}/${password}`;
    return this.httpClient.get<User>(url);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};