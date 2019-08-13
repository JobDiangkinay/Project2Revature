import { Component, OnInit } from '@angular/core';
import { UserinfoService } from './userinfo.service';
import { Observable } from 'rxjs';
import { Person } from './person';
import { User } from '../profile-editor/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  persons:Observable<Person[]>
  personById:Observable<Person>
  personSpec:Person;
  personNew:Person;
  userSpec:User;
  showUpdate:boolean = false;
  currentUserType:User;
  showUserInfo:boolean = false;
  showEditorPanel:boolean = false;

  constructor(private userInfoService: UserinfoService, private router: Router) { }

  ngOnInit() {
    //this.userInfoService.getPersonById(5).subscribe(person => this.personSpec = person);
    this.userInfoService.getCurrentPerson().subscribe(person => {this.personSpec = person, this.checkIfUserAvail(person)});
    this.persons = this.userInfoService.getPersons();
  }

  checkIfUserAvail(person:Person){
    if(person.firstName != null){
      this.showUserInfo = true;
      this.userInfoService.getCurrentUserType().subscribe(user => {this.userSpec = user, this.checkIfUserEditor(user)});
		}
  }

  checkIfUserEditor(user:User){
    if(user.userType == "EDITOR"){
      this.showEditorPanel = true;
    }
  }

  updateInfo(formData){
   
    let newPer = new Person(this.personSpec.id,this.personSpec.firstName,this.personSpec.lastName,formData.newPhone,formData.newEmail);
    this.userInfoService.updatePersonInfo(newPer).subscribe(person => this.personSpec = person);
    this.ngOnInit();
    this.showUpdate = false;
  }

  showUpdateComponent(){
    this.showUpdate = !this.showUpdate;
  }

}
