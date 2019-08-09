package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.data.UserRepository;
import com.revature.models.User;

@RestController
@RequestMapping(path = "users")
public class UserController {
	
	 @Autowired
	    UserRepository userRepository;
	 
	 public UserRepository getUserRepository() {
		 return userRepository;
	 }
	 
	 public void setUserRepository(UserRepository userRepository) {
		 this.userRepository = userRepository;
	 }
	 
	 @GetMapping("/")
	    public List<User> getAllUsers() {
	        return getUserRepository().getAllUsers();
	    }
	 
	 @PostMapping("/")
	    public User postUser(@RequestBody User user) {
	        return getUserRepository().postUser(user);
	    }
}
