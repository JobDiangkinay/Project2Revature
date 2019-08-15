import { Component, SystemJsNgModuleLoader } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ProfileEditorService} from './profile-editor.service';
import { Observable } from 'rxjs';
import { User } from './User';
import { Person } from '../userinfo/person';
import {Router} from '@angular/router';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Component({
	selector: 'app-profile-editor',
	templateUrl: './profile-editor.component.html',
	styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
	UsersName:User;
	showUsernameError:boolean = false;
	showPasswordError:boolean = false;
	showFnameError:boolean = false;
	showLnameError:boolean = false;
	showPhoneError:boolean = false;
	showPhoneError2:boolean = false;
	showEmailError:boolean = false;
	showEmailError2: boolean = false;
	showLogIn:boolean = false;
	showUsernameError2: boolean = false;

  constructor(private ProfileEditorService: ProfileEditorService, private router: Router){}
	updateInfo(formdata){
		let newUser = new User(0,formdata.Username,"USER",formdata.Password, 
		new Person(0,formdata.firstname,formdata.lastname,formdata.Phonenumber,formdata.Email));
		this.ProfileEditorService.checkusername(formdata.Username)
		.subscribe(username => {this.UsersName = username,this.insertUser(username,newUser)});
		this.showLogInPage();
	}

	showLogInPage(){
		this.showLogIn = true;
	}

	insertUser(username:User, user:User){
		if(username == null){
			this.ProfileEditorService.InsertUser(user).subscribe();
		}
	}
	checkblankusername(formdata){
			if(formdata.Username == "")
			this.showUsernameError = true;
			if(formdata.Username != "")
			this.showUsernameError = false;
			this.ProfileEditorService.checkusername(formdata.Username)
			.subscribe(username => {this.UsersName = username,this.repeatuser(username)});
	}
	repeatuser(username:User){
		if(username != null)
		this.showUsernameError2 = true;
		else
		this.showUsernameError2 = false;
	}
	checkblankpassword(formdata){
			if(formdata.Password == "")
			this.showPasswordError = true;
			if(formdata.Password != "")
			this.showPasswordError = false;
	}
	checkblankfirstname(formdata){
			if(formdata.firstname == "")
			this.showFnameError = true;
			if(formdata.firstname != "")
			this.showFnameError = false;
	}
	checkblanklastname(formdata){
	
			if(formdata.lastname == "")
			this.showLnameError = true;
			if(formdata.lastname != "")
			this.showLnameError = false;
	}
	checkphone(formdata){
		if(formdata.Phonenumber == "")
			this.showPhoneError = true;
			if(formdata.Phonenumber != "")
			this.showPhoneError = false;
			
		if(formdata.Phonenumber.length <10 || formdata.Phonenumber.length >15 )
		this.showPhoneError2 = true;
		if(formdata.Phonenumber.length >9 && formdata.Phonenumber.length <16 )
		this.showPhoneError2 = false;
	}
	checkblankemail(formdata){
		let atpos = formdata.Email.indexOf("@");
         
        if (atpos < 1) {
			this.showEmailError2 = true;
		}
		else 
			this.showEmailError2 = false;	
		if(formdata.Email == "")
			this.showEmailError = true;	
			if(formdata.Email != "")
			this.showEmailError = false;
	}
	
	checkPLength(formdata){
		if(formdata.Password.length < 6 ){
			this.showPasswordError = true;
		}
		else{
			this.showPasswordError = false;
		}
	}
}