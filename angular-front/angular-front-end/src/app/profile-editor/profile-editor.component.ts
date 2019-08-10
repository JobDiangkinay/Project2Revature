import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-profile-editor',
	templateUrl: './profile-editor.component.html',
	styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
	profileForm = new FormGroup({
		UserName: new FormControl(''),
		Password: new FormControl(''),
		FirstName: new FormControl(''),
		LastName: new FormControl(''),
		PhoneNumber: new FormControl(''),
		Email: new FormControl(''),
	});
	onClickSubmit(UserName, Password, FirstName, LastName, PhoneNumber, Email) {
		var person = {
			id: 2,
			firstName: FirstName,
			lastName: LastName,
			phoneNumber: PhoneNumber,
			email: Email
		};
		var User = {
			id: 0,
			username: UserName,
			userType: "general",
			password: Password,
			person: person
		}
		var ob = JSON.stringify(User);
		alert(
			ob
		);
	}
}
