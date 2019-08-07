import java.util.Arrays;

public class User {
	private int Id;
	private  String Username;
	private  byte[] saltPassword;
	private  byte[] hashPassword;
	private String UserType;
	@Override
	public String toString() {
		return "User [Id=" + Id + ", Username=" + Username + ", saltPassword=" + Arrays.toString(saltPassword)
				+ ", hashPassword=" + Arrays.toString(hashPassword) + ", UserType=" + UserType + "]";
	}
	public User(int id, String username, byte[] saltPassword, byte[] hashPassword, String userType) {
		super();
		Id = id;
		Username = username;
		this.saltPassword = saltPassword;
		this.hashPassword = hashPassword;
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
}
