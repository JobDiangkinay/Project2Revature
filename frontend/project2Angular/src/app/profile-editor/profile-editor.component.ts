import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileEditorService} from './profile-editor.service';
import { Observable } from 'rxjs';
import { User } from './User';

@Component({
	selector: 'app-profile-editor',
	templateUrl: './profile-editor.component.html',
	styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  
  constructor(private ProfileEditorService: ProfileEditorService){}

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
			id: 0,
			firstName: FirstName,
			lastName: LastName,
			phoneNumber: PhoneNumber,
			email: Email
		};
		var User = {
			id: 0,
			username: UserName,
			userType: "USER",
			password: Password,
			person: person
    }
    this.ProfileEditorService.InsertUser(User).subscribe();
	}
}