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
 
 constructor(id:Number,username: string,userType: string,password: string,person: any){
	this.id = id;
	this.username = username;
	this.userType = userType;
	this.password = password;
	this.person = person;	
 }		
}