import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginComponentService } from './login-component.service';
import { Observable } from 'rxjs';
import { Person } from '../userinfo/person';
import { User } from '../profile-editor/User';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-component',
	templateUrl: './login-component.component.html',
	styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
	logInPerson: User;
	location: Location;
	showSignUp:boolean = false;
	showLoginError:boolean = false;
	constructor(private LoginComponentService: LoginComponentService, private router: Router) { }

	profileForm = new FormGroup({
		UserName: new FormControl(''),
		Password: new FormControl(''),
	});
	onClickSubmit(UserName, Password) {
		this.LoginComponentService.LoginUser(UserName, Password).subscribe(person => { this.logInPerson = person, this.redirectMethod(person)});
	}
	
	handleDisplaySignup(){
		this.showSignUp = !this.showSignUp;
	}

	redirectMethod(person:User){
		if(person != null){
			this.showLoginError = false;
			this.router.navigate(['./User']);
		}
		else
		this.showLoginError = true;
	}
}