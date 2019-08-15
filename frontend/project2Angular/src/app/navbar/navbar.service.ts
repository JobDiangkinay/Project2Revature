import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private logoutUrl = 'http://mysterice.us-east-2.elasticbeanstalk.com/users/logout/';
 
  constructor(private httpClient:HttpClient) { }
  
  UserLogout() {
    const url = `${this.logoutUrl}`;
    return this.httpClient.get(url);
  }
  
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};