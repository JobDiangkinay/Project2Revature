package com.revature.models;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.SecureRandom;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name = "users")
public class User {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	@Column(name = "username")
	private String username;
	@Column(name = "saltpassword")
	private byte[] saltPassword;
	@Column(name = "hashpassword")
	private byte[] hashPassword;
	@Column(name = "usertype")
	private String userType;
	
	 @OneToOne
	 @JoinColumn(name = "person")
	private Person person;

	public User() {
		super();
	}

	public User(int id, String username, String password, String userType, Person person) {
		super();
		this.id = id;
		this.username = username;
		this.userType = userType;
		this.person = person;
		stringToHash(password);
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public byte[] getSaltPassword() {
		return saltPassword;
	}

	public void setSaltPassword(byte[] saltPassword) {
		this.saltPassword = saltPassword;
	}

	public byte[] getHashPassword() {
		return hashPassword;
	}

	public void setHashPassword(byte[] hashPassword) {
		this.hashPassword = hashPassword;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public void stringToHash(String password) {
		SecureRandom random = new SecureRandom();
		byte[] salt = new byte[16];
		random.nextBytes(salt);
		this.saltPassword = salt;

		MessageDigest md;
		try {
			md = MessageDigest.getInstance("SHA-512");
			md.update(salt);

			// This is stored in database in user
			byte[] hashedPassword = md.digest(password.getBytes(StandardCharsets.UTF_8));
			this.hashPassword = hashedPassword;
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

}
