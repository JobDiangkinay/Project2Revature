package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "articles")
public class Article {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	@Column(name = "title")
	private String title;
	@Column(name = "content")
	private String content;
	@Column(name = "date")
	private String date;
	@Column(name = "category")
	private String category;
	@Column(name = "status")
	private String status;
	
	@ManyToOne
	@JoinColumn(name = "author_id")
	private Person person;
	
	public Article() {
		super();
	}
	public Article(int id, String title, String content, String date, String category, String status,
			Person person) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
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
		return content;
	}
	public void setContext(String content) {
		this.content = content;
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
