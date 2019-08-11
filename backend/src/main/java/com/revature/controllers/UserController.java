package com.revature.controllers;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.List;

import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

	 @GetMapping("/login/{username}")
	    public User getUser(@PathVariable("username") String Username) {
	        return getUserRepository().getUser(Username);
	    }
	 
	 @PostMapping("/")
	    public User postUser(@RequestBody User user) {
		 User newUser = user;
		 SecureRandom random = new SecureRandom();
			byte[] salt = new byte[16];
			random.nextBytes(salt);
			newUser.setSaltPassword(salt);

			MessageDigest md;
			try {
				md = MessageDigest.getInstance("SHA-512");
				md.update(salt);

				// This is stored in database in user
				byte[] hashedPassword = md.digest(newUser.getPassword().getBytes(StandardCharsets.UTF_8));
				newUser.setHashPassword(hashedPassword);
			} catch (Exception ex) {
				ex.printStackTrace();
			}
			System.out.println(newUser.toString());
	        return getUserRepository().postUser(newUser);
	    }
}
