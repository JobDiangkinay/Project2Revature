import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  private personUrl = 'http://localhost:8080/persons/';
  private updatePersonUrl = 'http://localhost:8080/persons/update';
  private currentPersonUrl = 'http://localhost:8080/persons/currentUser';
  constructor(private httpClient:HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.personUrl);
  }

  getPersonById(id: number): Observable<Person> {
    const url = `${this.personUrl}/${id}`;
    return this.httpClient.get<Person>(url);
  }

  getSetUser(): Observable<Person>{
    return this.httpClient.get<Person>('http://localhost:8080/users/login/JobUserTry/trypass');
  }

  getCurrentPerson(): Observable<Person>{
    const url = `${this.personUrl}/currentUser`;
    return this.httpClient.get<Person>('http://localhost:8080/persons/currentUser');
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