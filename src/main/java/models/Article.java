package models;

public class Article {
	private int id;
	private String title;
	private String context;
	private String author;
	private String date;
	private String category;
	private String status;
	private Person person;
	public Article() {
		super();
	}
	public Article(int id, String title, String context, String author, String date, String category, String status,
			Person person) {
		super();
		this.id = id;
		this.title = title;
		this.context = context;
		this.author = author;
		this.date = date;
		this.category = category;
		this.status = status;
		this.person = person;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContext() {
		return context;
	}
	public void setContext(String context) {
		this.context = context;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Person getPerson() {
		return person;
	}
	public void setPerson(Person person) {
		this.person = person;
	}
}
