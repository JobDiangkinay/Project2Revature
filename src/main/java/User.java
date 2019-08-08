import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.SecureRandom;

public class User {
	private int Id;
	private  String Username;
	private  byte[] saltPassword;
	private  byte[] hashPassword;
	private String UserType;

	public User(int id, String username, String password, String userType) {
		super();
		Id = id;
		Username = username;
		stringToHash(password);
		UserType = userType;
	}
	public User() {
		}
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
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
		return UserType;
	}
	public void setUserType(String userType) {
		UserType = userType;
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
			
			//This is stored in database in user
			byte[] hashedPassword = md.digest(password.getBytes(StandardCharsets.UTF_8));
			this.hashPassword = hashedPassword;
		}catch (Exception ex) {
			ex.printStackTrace();
		}
	}
}
