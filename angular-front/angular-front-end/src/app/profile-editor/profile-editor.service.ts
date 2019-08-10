import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User.ts';

@Injectable({
  providedIn: 'root'
})
export class ProfileEditorService {

  private signUpUrl = 'http://localhost:4200/signup/';
  constructor(private httpClient:HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.personUrl);
  }
  updatePersonInfo(person: Person): Observable<Person>{
    return this.httpClient.post<Person>(this.updatePersonUrl, person);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};