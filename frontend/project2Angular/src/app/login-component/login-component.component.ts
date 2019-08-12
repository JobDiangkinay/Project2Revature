import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginComponentService} from './login-component.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-login-component',
	templateUrl: './login-component.component.html',
	styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  
  constructor(private LoginComponentService: LoginComponentService){}

	profileForm = new FormGroup({
		UserName: new FormControl(''),
		Password: new FormControl(''),
	});
	onClickSubmit(UserName, Password) {
			username: UserName;
			password: Password;
	
    this.LoginComponentService.LoginUser(UserName,Password).subscribe();
}}