import { Component, OnInit } from '@angular/core';
import { UserinfoService } from '../userinfo/userinfo.service';
import { Person } from '../userinfo/person';
import { NavbarService } from './navbar.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
showAccountButton: boolean = false;
personCheck:Person;
  constructor(private userInfoService: UserinfoService, private NavbarService: NavbarService,private router: Router) { }

  ngOnInit() {
    this.userInfoService.getCurrentPerson().subscribe(person => {this.personCheck = person, this.handleAccountButton(person)});
  }
  Logout(){
    this.NavbarService.UserLogout().subscribe();
  }

  handleAccountButton(person:Person){
    if(person.firstName != null){
      this.showAccountButton = true;
		}
  }

}
