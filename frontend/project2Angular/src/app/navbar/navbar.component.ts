import { Component, OnInit } from '@angular/core';
import { UserinfoService } from '../userinfo/userinfo.service';
import { Person } from '../userinfo/person';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
showAccountButton: boolean = false;
personCheck:Person;
  constructor(private userInfoService: UserinfoService) { }

  ngOnInit() {
    this.userInfoService.getCurrentPerson().subscribe(person => {this.personCheck = person, this.handleAccountButton(person)});
  }

  handleAccountButton(person:Person){
    if(person.firstName != null){
      this.showAccountButton = true;
		}
  }

}
