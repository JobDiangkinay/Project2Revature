import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person';
import { User } from '../login-component/User';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  private personUrl = 'http://mysterice.us-east-2.elasticbeanstalk.com/persons/';
  private updatePersonUrl = 'http://mysterice.us-east-2.elasticbeanstalk.com/persons/update/';
  private currentPersonUrl = 'http://mysterice.us-east-2.elasticbeanstalk.com/persons/currentUser/';
  private currentUserUrl = 'http://mysterice.us-east-2.elasticbeanstalk.com/users/currentUserType/';
  constructor(private httpClient:HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.personUrl);
  }

  getPersonById(id: number): Observable<Person> {
    const url = `${this.personUrl}/${id}`;
    return this.httpClient.get<Person>(url);
  }

  getCurrentUserType(): Observable<User>{
    return this.httpClient.get<User>(this.currentUserUrl);
  }

  getCurrentPerson(): Observable<Person>{
    const url = `${this.personUrl}/currentUser`;
    return this.httpClient.get<Person>('http://mysterice.us-east-2.elasticbeanstalk.com/persons/currentUser');
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