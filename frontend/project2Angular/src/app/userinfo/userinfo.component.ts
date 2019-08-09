import { Component, OnInit } from '@angular/core';
import { UserinfoService } from './userinfo.service';
import { Observable } from 'rxjs';
import { Person } from './person';

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
  showUpdate:boolean = false;

  constructor(private userInfoService: UserinfoService) { }

  ngOnInit() {
    this.userInfoService.getPersonById(1).subscribe(hero => this.personSpec = hero);
    this.persons = this.userInfoService.getPersons();
  }
  
  firstName:String = "Juan";
  lastName:String = "Diangkinay";
  phoneNumber:String = "9494909895";

  updateInfo(formData){
    let newPer = new Person(this.personSpec.id,this.personSpec.firstName,this.personSpec.lastName,formData.newPhone,formData.newEmail);
    this.userInfoService.updatePersonInfo(newPer).subscribe();
    this.ngOnInit();
  }

  showUpdateComponent(){
    this.showUpdate = !this.showUpdate;
  }

}
