package com.revature.controllers;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	public List<User> getAllUsers(HttpSession session) {
		return getUserRepository().getAllUsers();
	}

	@GetMapping("/login/{username}/{password}")
	public User getUser(@PathVariable("username") String Username, @PathVariable("password") String Password, HttpSession session) {
		User user = getUserRepository().getUserByname(Username);
		System.out.println(user.toString());
		byte[] hashPassword = user.getHashPassword();
		byte[] hashSalt = user.getSaltPassword();
		try {
			MessageDigest md;
			md = MessageDigest.getInstance("SHA-512");
			md.update(hashSalt);

			byte[] hashedPassword = md.digest(Password.getBytes(StandardCharsets.UTF_8));
			if (Arrays.equals(hashedPassword, hashPassword)) {
				User curUser = getUserRepository().getUser(Username, Password);
				setSession(curUser.getUsername(),curUser.getUserType(), session);
				return curUser;
			}
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
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

	public void setSession(String username, String userType,HttpSession session) {
		session.setAttribute("username", username);
		session.setAttribute("userType", userType);
	}
	
	@GetMapping("/logout")
	public void logout(HttpSession session) {
		session.removeAttribute("username");
		session.removeAttribute("usertype");
	}
}
