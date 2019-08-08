package models;

public class User {
	private int id;
	private String username;
	private byte[] saltPassword;
	private byte[] hashPassword;
	private String userType;
	public User() {
		super();
	}
	public User(int id, String username, byte[] saltPassword, byte[] hashPassword, String userType) {
		super();
		this.id = id;
		this.username = username;
		this.saltPassword = saltPassword;
		this.hashPassword = hashPassword;
		this.userType = userType;
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
	
	
}
