export class User {
	id: Number;
	username: string;
	userType: string;
	password: string;
	person: {
			id: Number,
			firstName: string,
			lastName: string,
			phoneNumber: string,
			email: string
		};
 
 constructor(id:Number,username: string,userType: string,password: string,		
			id2: Number,firstName: string,lastName: string,phoneNumber: string,email: string){
this.id = id;
this.username = username;
this.userType = userType;
this.password = password;
this.person.id = id2;
this.person.firstName = firstName;
this.person.lastName = lastName;
this.person.phoneNumber = phoneNumber;
this.person.email = email;
 }
}